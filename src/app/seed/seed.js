const { Client } = require('pg');
require('dotenv').config();

// PostgreSQL client configuration
const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

const seedData = async () => {
  try {
    await client.connect();

    // Insert data into the users table
    await client.query(`
      INSERT INTO users (username, email, password, token)
      VALUES 
      ('john_doe', 'john@example.com', 'hashed_password1', 'token1'),
      ('jane_doe', 'jane@example.com', 'hashed_password2', 'token2'),
      ('alice_smith', 'alice@example.com', 'hashed_password3', 'token3')
    `);

    console.log("Data has been seeded successfully.");
  } catch (err) {
    console.error("Error seeding data:", err);
  } finally {
    await client.end();
  }
};

seedData();
