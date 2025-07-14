import { Request, Response } from 'express';
import pool from '../pool';
import { v4 as uuidv4 } from 'uuid';

export async function createUser(req: Request, res: Response) {
  const { email, username, oauth_provider, oauth_id } = req.body;

  if (!email || !username || !oauth_provider || !oauth_id) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }

  const id = uuidv4();

  try {
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

    if (error.code === '23505') {
      res.status(409).json({ error: 'User already exists' });
      return;
    }

    res.status(500).json({ error: 'Internal server error' });
    }
}
