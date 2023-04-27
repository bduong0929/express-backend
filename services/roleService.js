const roleDao = require("../daos/roleDao");

/**
 * This function is used to add a new role
 *
 * @param name - role name
 * @returns new role
 */
exports.addRole = async (name) => {
  return await roleDao.save(name);
};

/**
 * This function is used to get a role by name
 *
 * @param name
 * @returns
 */
exports.findRoleByName = async (name) => {
  return await roleDao.findRoleByName(name);
};

/**
 * This function is used to validate if a role is unique
 *
 * @param name
 * @returns
 */
exports.isUniqueRole = async (name) => {
  const role = await roleDao.findRoleByName(name);
  return role ? false : true;
};
