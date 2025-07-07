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
export async function getAllGroups(_req: Request, res: Response) {
 console.log("get all groups called");
    try {
    const result = await pool.query('SELECT * FROM groups;');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('❌ Error fetching groups:', error);
    res.status(500).json({ error: 'Database error' });
  }
}

export async function getGroupByID(req: Request, res: Response) {
  const {param} = req.params;
  const ID = parseInt(param);

  try {
    const result = await pool.query("SELECT * FROM groups WHERE debut_date = $1;", [ID]);
    res.status(200).json(result.rows);

  } catch(e){
    console.error('Error fetching group by ID:', e);
    res.status(500).json({ error: 'Database error' });
  }
}

export async function getGroupByName(req: Request, res: Response){
  const {param} = req.params;
  
  try{
    const result = await pool.query("SELECT * FROM groups WHERE group_name ILIKE $1;", [`%${param}%`]);
    res.status(200).json(result.rows);
  } catch (e){
    console.error('Error fetching group by name:', e);
    res.status(500).json({ error: 'Database error' });
  }
}
