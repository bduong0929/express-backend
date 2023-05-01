const sequelize = require("./config");
const Role = require("../models/role");
const User = require("../models/user");
const Task = require("../models/task");

// Establish relationships between the models
Role.associate({ User });
User.associate({ Role, Task });
Task.associate({ User });

sequelize
  .sync({ alter: true })
  .then(() => console.log("Database synced"))
  .catch((err) => console.log("Error syncing database: ", err));

module.exports = { Role, User, Task };
