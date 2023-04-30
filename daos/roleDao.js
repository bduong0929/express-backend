const { where } = require("sequelize");
const Role = require("../models/role");

/**
 * Save a new role with the given name
 * @param {string} name - The name of the role to save
 * @returns {Promise<Object>} A promise that resolves to the newly created role object
 */
exports.save = async (name) => {
  const newRole = await Role.create({ name });
  return newRole;
};

/**
 * Find a role by its name
 * @param {string} name - The name of the role to find
 * @returns {Promise<Object>} A promise that resolves to the found role object or null if not found
 */
exports.findRoleByName = async (name) => {
  return await Role.findOne({
    where: {
      name: name,
    },
  });
};
