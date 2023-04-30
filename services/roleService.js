const roleDao = require("../daos/roleDao");

/**
 * Add a new role with the given name
 * @param {string} name - The name of the role to add
 * @returns {Promise<Object>} A promise that resolves to the newly created role object
 */
exports.addRole = async (name) => {
  return await roleDao.save(name);
};

/**
 * Find a role by its name
 * @param {string} name - The name of the role to find
 * @returns {Promise<Object>} A promise that resolves to the found role object or null if not found
 */
exports.findRoleByName = async (name) => {
  return await roleDao.findRoleByName(name);
};

/**
 * Check if a role with the given name already exists
 * @param {string} name - The name of the role to check
 * @returns {Promise<boolean>} A promise that resolves to true if the role does not exist, false otherwise
 */
exports.isUniqueRole = async (name) => {
  const role = await roleDao.findRoleByName(name);
  return role ? false : true;
};
