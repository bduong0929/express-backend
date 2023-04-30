const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

// Define the User model
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

// Define associations
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
