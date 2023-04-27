const { pool } = require("pg");
const dotenv = require("dotenv");

dotenv.config(); // load environment variables

/**
 * This pool will be shared by all other modules that require this file
 */
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

module.exports = pool; // export the pool so that it is shared across all modules
