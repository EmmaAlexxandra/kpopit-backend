import { Request, Response } from 'express';
import pool from '../pool'

export async function createPost(req: Request, res: Response) {
    var {userID,context,groupID,idolBirthday} = req.body;
    console.log(req.body)

    if (!userID || !context ) {
        res.status(400).json({ error: 'Missing required fields' });
        return;

    } else if (!groupID){
        groupID = null
    } else if (!idolBirthday) {
        idolBirthday = '[]';
    }

    const parsedContext = typeof context === 'string' ? JSON.parse(context) : context;
    const parsedIdolBirthday = typeof idolBirthday === 'string' ? JSON.parse(idolBirthday) : idolBirthday;
    
    try {
        const userCheck = await pool.query('SELECT * FROM users WHERE id = $1', [userID]);
        if (userCheck.rows.length === 0) {
            res.status(404).json({ error: 'User not found' });
            return;
        }

        const result = await pool.query(
            `INSERT INTO posts (user_id, context, group_id, idol_birthday) 
             VALUES ($1, $2, $3, $4) RETURNING *;`,
            [userID, JSON.stringify(parsedContext), groupID, JSON.stringify(parsedIdolBirthday)]
        );

        res.status(201).json(result.rows[0]);

    } catch (error: any) {
        console.error('❌ Error creating post:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}