import { Request, Response } from 'express';
import pool from '../pool'

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
        const result = await pool.query('SELECT * FROM posts WHERE id = $1', [postId]);
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
        res.status(200).json(result.rows[0]);
    } catch (error: any) {
        console.error('❌ Error fetching post:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
