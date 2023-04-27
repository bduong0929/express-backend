const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

/**
 * This function is used to generate a JWT token from a user object
 *
 * @param user
 * @returns
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
 * This function is used to authenticate a JWT token
 *
 * @param token
 * @returns
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
