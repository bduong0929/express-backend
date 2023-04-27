const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");
const User = require("./user");

/**
 * Create a new role model
 */
const Role = sequelize.define(
  "roles",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    schema: "express",
    timestamps: false,
  }
);

/**
 * Create a one-to-many relationship between role and user
 *
 * associate is used to prevent circular dependencies
 */
Role.associate = (models) => {
  Role.hasMany(models.User, {
    foreignKey: {
      name: "role_id",
    },
  });
};

module.exports = Role;
