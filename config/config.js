const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config(); // load environment variables

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize; // export the pool so that it is shared across all modules
