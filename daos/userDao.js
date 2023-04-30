const User = require("../models/user");

/**
 * Save a new user with the given username, password and role ID
 * @param {string} username - The username of the user to save
 * @param {string} password - The password of the user to save
 * @param {number} roleId - The ID of the role to assign to the user
 * @returns {Promise<Object>} A promise that resolves to the newly created user object
 */
exports.save = async (username, password, roleId) => {
  return await User.create({
    username: username,
    password: password,
    role_id: roleId,
  });
};

/**
 * Find a user by their username
 * @param {string} username - The username of the user to find
 * @returns {Promise<Object>} A promise that resolves to the found user object or null if not found
 */
exports.findUserByUsername = async (username) => {
  return await User.findOne({
    where: {
      username: username,
    },
  });
};
