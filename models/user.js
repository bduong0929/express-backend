const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/config");

class User extends Model {}

User.init(
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
    sequelize,
    modelName: "users",
    schema: "express",
    timestamps: false,
  }
);

User.associate = (models) => {
  User.belongsTo(models.Role, {
    foreignKey: {
      name: "role_id",
      allowNull: false,
    },
    onDelete: "CASCADE",
    targetKey: "id",
  });

  User.hasMany(models.Task, {
    foreignKey: {
      name: "user_id",
    },
  });
};

module.exports = User;
