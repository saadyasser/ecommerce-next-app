import pool from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import { QueryResult } from "pg";

type User = {
    id: number;
    name: string;
    email: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const result: QueryResult<User> = await pool.query('SELECT * FROM users');
        const rows: User[] = result.rows;

        console.log(rows);
        return res.status(200).json(rows);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

