const sequelize = require("./sequelize");
const Role = require("../models/role");
const User = require("../models/user");
const Task = require("../models/task");

// Establish relationships between the models
Role.hasMany(User, {
  foreignKey: {
    name: "role_id",
    allowNull: false,
  },
})

User.belongsTo(Role, {
  foreignKey: {
    name: "role_id",
    allowNull: false,
  }
})

User.hasMany(Task, {
  foreignKey: {
    name: "user_id",
    allowNull: false,
  }
})

Task.belongsTo(User, {
  foreignKey: {
    name: "user_id",
    allowNull: false,
  }
})

module.exports = { Role, User, Task };

