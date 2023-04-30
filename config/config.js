const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables from .env file

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres", // Set the dialect to 'postgres'
  logging: false, // Disable logging for production
});

/**
 * A shared instance of the Sequelize connection pool
 * @type {Sequelize}
 */
module.exports = sequelize;
