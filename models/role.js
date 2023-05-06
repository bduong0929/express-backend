const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/sequelize"); // Adjust the path to your Sequelize instance

class Role extends Model { }

Role.init(
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
    sequelize,
    modelName: "roles",
    schema: "express",
    timestamps: false,
  }
);

module.exports = Role;
