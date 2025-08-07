import { Request, Response } from 'express';
import pool from "../pool";
import { v4 as uuidv4 } from 'uuid';

export async function getAlLPublicPlaylists(req:Request,res:Response){
    try {
        const result = await pool.query("SELECT * FROM playlists WHERE public = true;")
        if(result.rows.length == 0){
            res.status(404).json({error:"No public Playlists Found"})
        }
        res.status(200).json(result.rows)
    }catch (e){
        console.error('❌ Error fetching post:', e);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export async function getAllPlaylistsByUserId(req:Request,res:Response){
    const {userId} = req.params

    if(!userId){
        res.status(400).json({error:"Missing Required Fields"})
    }

    try {
        //TODO Gonna need to put this call in utils as I am using it a lot 
        const checkUser = await pool.query('SELECT username FROM users WHERE id = $1', [userId]);
        if (checkUser.rows.length === 0) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        
        const results = await pool.query("SELECT * FROM playlists WHERE user_id = $1",[userId])
        if(results.rows.length == 0){
            res.status(404).json({error:"No playlists created by this user"})
        }
        res.status(200).json(results.rows)

    } catch (e){
        console.error('❌ Error fetching post:', e);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export async function  getAllPlaylistByUserName(req:Request, res:Response){
    const {username} = req.params

    if(!username){
        res.status(400).json({error:"Missing Required Fields"})
    }

    try {
        const checkUser = await pool.query('SELECT id FROM users WHERE username = $1', [username]);
        if (checkUser.rows.length === 0) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        const userIdResult = checkUser.rows[0]?.id;
        if (!userIdResult){
            res.status(404).json({error:"user id not found"})
            console.log(userIdResult)
        }

        const results = await pool.query("SELECT * FROM playlists WHERE user_id = $1",[userIdResult])
        if(results.rows.length == 0){
            res.status(404).json({error:"No playlists created by this user"})
        }
        res.status(200).json(results.rows)

    } catch (error){
        console.error('❌ Error fetching post:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}