const sequelize = require("./config");
const Role = require("../models/role");
const User = require("../models/user");

// Establish relationships between the models
Role.associate({ User });
User.associate({ Role });

/**
 * Sync the models with the database, using the `alter` option to automatically apply any changes to the schema
 */
sequelize
  .sync({ alter: true })
  .then(() => console.log("Database synced"))
  .catch((err) => console.log("Error syncing database: ", err));

/**
 * The exported models
 * @type {{Role: Model<RoleAttributes, RoleCreationAttributes>, User: Model<UserAttributes, UserCreationAttributes>}}
 */
module.exports = { Role, User };
