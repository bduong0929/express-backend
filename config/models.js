// models.js
const sequelize = require("./config");
const Role = require("../models/role");
const User = require("../models/user");

// Established relationships
Role.associate({ User });
User.associate({ Role });

// Sync models with the database
sequelize
  .sync({ alter: true })
  .then(() => console.log("Database synced"))
  .catch((err) => console.log("Error syncing database: ", err));

module.exports = { Role, User };
