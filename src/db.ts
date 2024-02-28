import knex from 'knex';
import dotenv from 'dotenv';

dotenv.config();

const db = knex({
  client: 'pg', // Indicates you're using PostgreSQL
  connection: {
    host: process.env.DB_HOST,
    port: 5432, // Default PostgreSQL port
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  }
});

export default db;