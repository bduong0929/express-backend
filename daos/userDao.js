const User = require("../models/user");

/**
 * This function is used to save a new user into the database
 *
 * @param username
 * @param password
 * @param roleId
 * @returns
 */
exports.save = async (username, password, roleId) => {
  return await User.create({
    username: username,
    password: password,
    role_id: roleId,
  });
};

/**
 * This function is used to get a user by username
 *
 * @param username
 * @returns
 */
exports.findUserByUsername = async (username) => {
  return await User.findOne({
    where: {
      username: username,
    },
  });
};
