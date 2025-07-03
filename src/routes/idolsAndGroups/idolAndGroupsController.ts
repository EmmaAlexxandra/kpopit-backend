import { Request, Response } from 'express';
import pkg from 'pg';

const { Pool } = pkg;
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: 'db',
  database: process.env.POSTGRES_DB,
  port: 5432,
});

export async function getAllIdols(_req: Request, res: Response) {
  try {
    const result = await pool.query('SELECT * FROM idols;');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('❌ Error fetching idols:', error);
    res.status(500).json({ error: 'Database error' });
  }
}
