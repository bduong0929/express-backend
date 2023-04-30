const bcrypt = require("bcrypt");
const userDao = require("../daos/userDao");
const roleService = require("./roleService");

/**
 * Register a new user with the given username and password
 * @param {string} username - The username of the user to register
 * @param {string} password - The password of the user to register
 * @returns {Promise<Object>} A promise that resolves to the newly registered user object
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
 * Authenticate a user with the given username and password
 * @param {string} username - The username of the user to authenticate
 * @param {string} password - The password of the user to authenticate
 * @returns {Promise<Object>} A promise that resolves to an object with a success boolean and a user object if authentication is successful, otherwise an object with a success boolean and a message string
 */
exports.login = async (username, password) => {
  const foundUser = await userDao.findUserByUsername(username);

  if (!foundUser) {
    return {
      success: false,
      message: "Username or password is incorrect",
    };
  }

  const isPasswordValid = await bcrypt.compare(password, foundUser.password);

  if (!isPasswordValid) {
    return {
      success: false,
      message: "Username or password is incorrect",
    };
  }

  return {
    success: true,
    user: foundUser,
  };
};

/**
 * Check if a username is valid
 * @param {string} username - The username to check
 * @returns {boolean} A boolean indicating if the username is valid or not
 */
exports.isValidUsername = (username) => {
  return /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/.test(username);
};

/**
 * Check if a username is unique
 * @param {string} username - The username to check
 * @returns {Promise<boolean>} A promise that resolves to true if the username is unique, false otherwise
 */
exports.isUniqueUsername = async (username) => {
  const foundUser = await userDao.findUserByUsername(username);
  return foundUser ? false : true;
};

/**
 * Check if a password is valid
 * @param {string} password - The password to check
 * @returns {boolean} A boolean indicating if the password is valid or not
 */
exports.isValidPassword = (password) => {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
    password
  );
};

/**
 * Check if a password and confirm password match
 * @param {string} password - The password to check
 * @param {string} confirmPassword - The confirm password to check
 * @returns {boolean} A boolean indicating if the password and confirm password match or not
 */
exports.isSamePassword = (password, confirmPassword) => {
  return password === confirmPassword;
};
