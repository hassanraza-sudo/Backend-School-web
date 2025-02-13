const { Client, Pool } = require("pg");

const client = new Client({
  connectionString: "postgresql://postgres:root@localhost:5432/schooldb",
});

const connectDb = async () => {
  try {
    await client.connect();
    console.log("Connected to PostgreSQL database.");
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
};

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "schooldb",
  password: "root",
  port: 5432,
});

module.exports = { pool, client, connectDb };
