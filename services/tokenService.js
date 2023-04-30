const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

/**
 * Generate a JSON Web Token for the given user object
 * @param {Object} user - The user object to create a token for
 * @returns {string} A signed JSON Web Token string
 */
exports.generateToken = (user) => {
  const payload = {
    id: user.id,
    role_id: user.role_id,
  };

  const options = {
    expiresIn: "1h",
  };

  return jwt.sign(payload, process.env.JWT_SECRET, options);
};

/**
 * Authenticate a JSON Web Token
 * @param {string} token - The token to authenticate
 * @returns {Object} An object with a success boolean and a message string if the token is invalid, otherwise the decoded token payload
 */
exports.authenticateJWT = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return {
        success: false,
        message: "Token is not valid",
      };
    }
    return user;
  });
};
