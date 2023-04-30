const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");
const User = require("./user");

// Define the Role model
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

// Define associations
Role.associate = (models) => {
  Role.hasMany(models.User, {
    foreignKey: {
      name: "role_id",
    },
  });
};

module.exports = Role;
