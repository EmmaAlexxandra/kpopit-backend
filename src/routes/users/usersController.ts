import { Request, Response } from 'express';
import pool from '../pool';
import { v4 as uuidv4 } from 'uuid';
import { OAuth2Client } from 'google-auth-library';

export async function createUser(req: Request, res: Response) {
    const { email, username, oauth_provider, oauth_id } = req.body;
  
    if (!email || !username || !oauth_provider || !oauth_id) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }
  
    try {
      
      const existing = await pool.query(
        'SELECT * FROM users WHERE oauth_provider = $1 AND oauth_id = $2',
        [oauth_provider, oauth_id]
      );
  
      if (existing.rows.length > 0) {
        res.status(200).json(existing.rows[0]); 
        return;
      }
  
      const id = uuidv4();
  
      const result = await pool.query(
        `INSERT INTO users (
          id, email, username, oauth_provider, oauth_id
        ) VALUES (
          $1, $2, $3, $4, $5
        ) RETURNING *;`,
        [id, email, username, oauth_provider, oauth_id]
      );
  
      res.status(201).json(result.rows[0]);
    } catch (error: any) {
      console.error('❌ Error creating user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

export function getUserById(req:Request, res:Response) {
    const { userId } = req.params;
  
    pool.query('SELECT * FROM users WHERE id = $1', [userId])
      .then(result => {
        if (result.rows.length === 0) {
          return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(result.rows[0]);
      })
      .catch(error => {
        console.error('❌ Error fetching user:', error);
        res.status(500).json({ error: 'Database error' });
      });
  }

export function getUsersByUserName(req: Request, res: Response) {
    const { username } = req.params;
    
    pool.query('SELECT * FROM users WHERE username ILIKE $1', [`%${username}%`])
        .then(result => {
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'No users found with that username' });
        }
        res.status(200).json(result.rows);
        })
        .catch(error => {
        console.error('❌ Error fetching users by username:', error);
        res.status(500).json({ error: 'Database error' });
        });
}


const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// TEMP login for development without frontend or idToken
export async function loginWithGoogle(req: Request, res: Response) {
    const { oauth_provider, oauth_id } = req.body;
  
    if (!oauth_provider || !oauth_id) {
      res.status(400).json({ error: 'Missing oauth_provider or oauth_id' });
      return;
    }
  
    try {
      const result = await pool.query(
        `SELECT * FROM users WHERE oauth_provider = $1 AND oauth_id = $2 LIMIT 1;`,
        [oauth_provider, oauth_id]
      );
  
      if (result.rows.length === 0) {
        res.status(401).json({ error: 'User not found' });
        return;
      }
  
      res.status(200).json(result.rows[0]);
    } catch (error: any) {
      console.error('❌ Error logging in:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  
  