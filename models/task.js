const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/sequelize"); // Import Sequelize instance from ../config/sequelize

class Task extends Model {}

// Initialize the Task model and define its properties
Task.init(
  {
    // The ID of the task
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // The name of the task
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // The status of the task completion
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize, // Pass the Sequelize instance to use
    modelName: "tasks", // The name of the table in the database
    schema: "express", // The schema of the table in the database
    timestamps: false, // Disable timestamps (createdAt and updatedAt) in the table
  }
);

module.exports = Task; // Export the Task model for use in other modules
