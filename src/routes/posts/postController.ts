import { Request, Response } from 'express';
import pool from '../pool'
export async function getAllPosts(req: Request, res: Response) {
    try {
        const result = await pool.query('SELECT * FROM posts');
        res.status(200).json(result.rows);
    } catch (error: any) {
        console.error('❌ Error fetching posts:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export async function getPostById(req: Request, res: Response) {
    const { postId } = req.params;

    try {
        const result = await pool.query('SELECT * FROM posts  WHERE id = $1', [postId]);
        if (result.rows.length === 0) {
            res.status(404).json({ error: 'Post not found' });
        }
        res.status(200).json(result.rows[0]);
    } catch (error: any) {
        console.error('❌ Error fetching post:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export async function getPostsByUserId(req: Request, res: Response) {
    const { userId } = req.params;

    try {
        const result = await pool.query('SELECT * FROM posts WHERE user_id = $1', [userId]);
        if (result.rows.length === 0) {
            res.status(404).json({ error: 'Post not found' });
        }
        res.status(200).json(result.rows);
    } catch (error: any) {
        console.error('❌ Error fetching post:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export async function getPostByUserName(req:Request,res:Response){
    const { username } = req.params;

    try {
        const result = await pool.query('SELECT * FROM posts INNER JOIN users ON users.id = posts.user_id WHERE users.username ILIKE $1', [`%${username}%`]);
        if (result.rows.length === 0) {
            res.status(404).json({ error: 'Post not found' });
        }
        res.status(200).json(result.rows);
    } catch (error: any) {
        console.error('❌ Error fetching post:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export async function getPostsByGroupId(req: Request, res: Response) {
    console.log("got to the getPostsByGroupId controller")
    const { groupId } = req.params;

    try {
        const result = await pool.query('SELECT * FROM posts WHERE group_id = $1', [groupId]);
        if (result.rows.length === 0) {
            res.status(404).json({ error: 'Post not found' });
        }
        res.status(200).json(result.rows);
    } catch (error: any) {
        console.error('❌ Error fetching post:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export async function getPostsByIdolBirthday(req: Request, res: Response): Promise<any> {
    const { idolBirthday } = req.params;

    try {
        const checkIdolBirthday = await pool.query('SELECT * FROM idols WHERE birthday = $1', [idolBirthday]);
        if (checkIdolBirthday.rows.length === 0) {
            return res.status(404).json({ error: 'Idol not found' });
        }
        const results = await pool.query("SELECT * FROM posts WHERE idol_birthday::jsonb @> $1", [`[${idolBirthday}]`]);
       
        return res.status(200).json(results.rows);

    } catch (e) {
        console.error('❌ Error fetching posts by idol birthday:', e);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

export async function getPostsByGroupNameOrIdolName(req:Request, res:Response){
    const { groupOrIdolName } = req.params;
    try {
        const checkGroup = await pool.query('SELECT * FROM groups WHERE group_name ILIKE $1', [`%${groupOrIdolName}%`]);
        const checkIdol = await pool.query('SELECT * FROM idols WHERE stage_name ILIKE $1 OR legal_name ILIKE $1', [`%${groupOrIdolName}%`]);
        if (checkGroup.rows.length === 0 && checkIdol.rows.length === 0) {
            res.status(404).json({ error: 'Group or idol not found' });
            return
        }

        const results  = await pool.query(`SELECT * FROM posts WHERE content ->> 'text' ILIKE $1;`, [`%${groupOrIdolName}%`]);
        if (results.rows.length === 0) {
            res.status(404).json({ error: 'No posts found for this group' });
            return
        }
        res.status(200).json(results.rows);

    } catch (error: any) {
        console.error('❌ Error fetching posts by group name:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export async function createPost(req: Request, res: Response) {
    var {userID,content,groupID,idolBirthday} = req.body;
    console.log(req.body)

    if (!userID || !content ) {
        res.status(400).json({ error: 'Missing required fields' });
        return;

    } else if (!groupID){
        groupID = null
    } else if (!idolBirthday) {
        idolBirthday = '[]';
    }

    const parsedContext = typeof content === 'string' ? JSON.parse(content) : content;
    const parsedIdolBirthday = typeof idolBirthday === 'string' ? JSON.parse(idolBirthday) : idolBirthday;
    
    try {
        const userCheck = await pool.query('SELECT * FROM users WHERE id = $1', [userID]);
        if (userCheck.rows.length === 0) {
            res.status(404).json({ error: 'User not found' });
            return;
        }

        const result = await pool.query(
            `INSERT INTO posts (user_id, content, group_id, idol_birthday) 
             VALUES ($1, $2, $3, $4) RETURNING *;`,
            [userID, JSON.stringify(parsedContext), groupID, JSON.stringify(parsedIdolBirthday)]
        );

        res.status(201).json(result.rows[0]);

    } catch (error: any) {
        console.error('❌ Error creating post:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


// TODO: these two need to be changed to track if they have like the post previously
export async function putLikePost(req: Request, res: Response) {
    const { postId } = req.params;
    

    if (!postId ) {
        res.status(400).json({ error: 'Missing required fields' });
        return;
    }

    try {
        const checkPost = await pool.query('SELECT * FROM posts WHERE id = $1', [postId]);
        if( checkPost.rows.length === 0 ) {
          res.status(404).json({ error: 'Post not found' });
          return;
        }
        
        const results = await pool.query(
            'UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *;',
            [postId]
          );
        res.status(200).json(results.rows[0]);

    } catch (error){
        console.error('❌ Error liking post:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export async function putUnlikePost(req: Request, res: Response) {
    const { postId } = req.params;

    if (!postId) {
        res.status(400).json({ error: 'Missing required fields' });
        return;
    }

    try {
        const checkPost = await pool.query('SELECT * FROM posts WHERE id = $1', [postId]);
        if (checkPost.rows.length === 0) {
            res.status(404).json({ error: 'Post not found' });
            return;
        }

        const checkLikes = checkPost.rows[0].likes;
        if (checkLikes <= 0) {
            res.status(400).json({ error: 'Cannot unlike a post with no likes' });
            return;
        }

        const results = await pool.query(
            'UPDATE posts SET likes = likes - 1 WHERE id = $1 RETURNING *;',
            [postId]
        );
        res.status(200).json(results.rows[0]);

    } catch (error) {
        console.error('❌ Error unliking post:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


export async function putSharePost(req: Request, res: Response) {
    const { postId } = req.params;

    if (!postId) {
        res.status(400).json({ error: 'Missing required fields' });
        return;
    }

    try {
        const checkPost = await pool.query('SELECT * FROM posts WHERE id = $1', [postId]);
        if (checkPost.rows.length === 0) {
            res.status(404).json({ error: 'Post not found' });
            return;
        }

        const results = await pool.query(
            'UPDATE posts SET shares = shares + 1 WHERE id = $1 RETURNING *;',
            [postId]
        );
        res.status(200).json(results.rows[0]);

    } catch (error) {
        console.error('❌ Error sharing post:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
export async function putAddCommentToPost(req:Request, res:Response){
    const {postId} = req.params;
    const {userId, content} = req.body;

    if (!postId || !userId || !content) {
        res.status(400).json({ error: 'Missing required fields' });
        return;
    }

    try {
        const checkPost = await pool.query('SELECT * FROM posts WHERE id = $1', [postId]);
        if (checkPost.rows.length === 0) {
            res.status(404).json({ error: 'Post not found' });
            return;
        }

        const checkUser = await pool.query('SELECT username FROM users WHERE id = $1', [userId]);
        if (checkUser.rows.length === 0) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        const usernameResult = checkUser.rows[0]?.username;
        const getCurrentComments = await pool.query('SELECT comments FROM posts WHERE id = $1', [postId])
        const getCurrentCommentsArray = getCurrentComments.rows[0]?.comments 
        if (!Array.isArray(getCurrentCommentsArray)){
            console.error('Current comments array:', getCurrentCommentsArray);
            res.status(500).json({ error: 'Could not load comments' });
            return;
        }
        
        const newComment = {
            "userId": userId,
            "username":usernameResult,
            "comment": content,
        }
        const updatedComments = [...getCurrentCommentsArray, newComment];
        const results = await pool.query(
            'UPDATE posts SET comments = $1 WHERE id = $2 RETURNING *;',
            [JSON.stringify(updatedComments), postId]
        );
        res.status(200).json(results.rows[0]);
        
        

    } catch (error) {
        console.error('❌ Error adding comment to post:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

