import { Client } from "pg";

const pgClient = new Client({
  user: "neondb_owner",
  host: "ep-ancient-poetry-adzhhja8-pooler.c-2.us-east-1.aws.neon.tech",
  database: "neondb",
  password: "npg_IS1Z9nVjBzfT",
  port: 5432, // PostgreSQL's default port
  ssl: {
    // This is crucial for Neon to ensure a secure connection
    rejectUnauthorized: false, 
  },
});


async function connectToDatabase() {
    await pgClient.connect();
    const response = await pgClient.query("SELECT * FROM student");
    console.log(response.rows);
}
connectToDatabase();