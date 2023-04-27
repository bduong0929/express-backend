const { where } = require("sequelize");
const Role = require("../models/role");

/**
 * This function is used to save a new role
 *
 * @param name
 * @returns new role
 */
exports.save = async (name) => {
  const newRole = await Role.create({ name });
  return newRole;
};

/**
 * This function is used to get a role by name
 *
 * @param name
 * @returns role
 */
exports.findRoleByName = async (name) => {
  return await Role.findOne({
    where: {
      name: name,
    },
  });
};
