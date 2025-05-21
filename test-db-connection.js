require("dotenv").config();
const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

async function testConnection() {
  try {
    await client.connect();
    console.log("Successfully connected to the database!");

    // Test query
    const result = await client.query("SELECT NOW()");
    console.log("Current database time:", result.rows[0].now);

    await client.end();
  } catch (err) {
    console.error("Error connecting to the database:", err);
  }
}

testConnection();
