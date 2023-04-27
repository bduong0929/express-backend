const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");
const Role = require("./role");

/**
 * Create a new user model
 */
const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    schema: "express",
    timestamps: false,
  }
);

/**
 * Create a many-to-one relationship between user and role
 *
 * associate is used to prevent circular dependencies
 */
User.associate = (models) => {
  User.belongsTo(models.Role, {
    foreignKey: {
      name: "role_id",
      allowNull: false,
    },
    onDelete: "CASCADE",
    targetKey: "id",
  });
};

module.exports = User;
