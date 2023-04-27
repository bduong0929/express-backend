const bcrypt = require("bcrypt");
const userDao = require("../daos/userDao");
const roleService = require("./roleService");

/**
 * This function is used to register a new user with a default USER role
 *
 * @param username
 * @param password
 * @returns
 */
exports.register = async (username, password) => {
  const role = await roleService.findRoleByName("USER");

  if (!role) {
    throw new Error("Role USER not found");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  return await userDao.save(username, hashedPassword, role.id);
};

/**
 * This function is used to check if a username is valid
 *
 * @param username
 * @returns
 */
exports.isValidUsername = (username) => {
  return /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/.test(username);
};

/**
 * This function is used to check if a username is unique
 *
 * @param username
 * @returns
 */
exports.isUniqueUsername = async (username) => {
  const foundUser = await userDao.findUserByUsername(username);
  return foundUser ? false : true;
};

/**
 * This function is used to check if a password is valid
 *
 * @param password
 * @returns
 */
exports.isValidPassword = (password) => {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
    password
  );
};

/**
 * This function is used to check if a password and confirmPassword are the same
 * @param password
 * @param confirmPassword
 * @returns
 */
exports.isSamePassword = (password, confirmPassword) => {
  return password === confirmPassword;
};
