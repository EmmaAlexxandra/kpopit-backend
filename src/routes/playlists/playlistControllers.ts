import { Request,Response } from "express";
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