const { Pool } = require("pg");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables from .env file

/**
 * A shared instance of the PostgreSQL connection pool
 * @type {Pool}
 */
const pgPool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

module.exports = pgPool;
