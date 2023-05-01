const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/config"); // Adjust the path to your Sequelize instance

class Task extends Model {}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "tasks",
    schema: "express",
    timestamps: false,
  }
);

Task.associate = (models) => {
  Task.belongsTo(models.User, {
    foreignKey: {
      name: "user_id",
      allowNull: false,
    },
    onDelete: "CASCADE",
    targetKey: "id",
  });
};

module.exports = Task;
