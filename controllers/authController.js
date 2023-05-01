const userService = require("../services/userService");
const tokenService = require("../services/tokenService");
const logger = require("../utils/logger");

/**
 * Registers a new user
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {function} next - The next middleware function
 * @returns {Promise<Object>} A promise that resolves to a JSON response
 */
exports.register = async (req, res, next) => {
  try {
    logger.info(`Registration request received: ${JSON.stringify(req.body)}`);
    const { username, password, confirmPassword } = req.body;

    // Validate username
    if (!userService.isValidUsername(username)) {
      return res.status(422).json({
        error:
          "Username must be 8-20 characters long, no _ or . at the beginning or end and no __ or _. or ._ or .. inside",
      });
    }

    // Check if username is unique
    if (!(await userService.isUniqueUsername(username))) {
      return res.status(409).json({
        error: "Username already exists",
      });
    }

    // Validate password
    if (!userService.isValidPassword(password)) {
      return res.status(422).json({
        error:
          "Password must be 8-20 characters long, at least one letter, one number and one special character",
      });
    }

    // Check if password matches confirm password
    if (!userService.isSamePassword(password, confirmPassword)) {
      return res.status(400).json({
        error: "Password and confirm password must match",
      });
    }

    // Register the user
    await userService.register(username, password);

    logger.info("User registered successfully:");

    // Return success message
    return res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    logger.info(`Error during registration: ${error}`);
    // Pass any errors to the error handling middleware
    next(error);
  }
};

/**
 * Logs in a user
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {function} next - The next middleware function
 * @returns {Promise<Object>} A promise that resolves to a JSON response
 */
exports.login = async (req, res, next) => {
  try {
    logger.info(`Login request received: ${JSON.stringify(req.body)}`);
    const { username, password } = req.body;

    // Attempt to log in the user
    const result = await userService.login(username, password);

    // If login is unsuccessful, return error message
    if (!result.success) {
      return res.status(401).json({
        error: result.message,
      });
    }

    // If login is successful, generate a token
    const { user } = result;
    const token = await tokenService.generateToken(user);

    logger.info("User logged in successfully");

    // Return user details and token
    return res.status(200).json({
      id: user.id,
      username: user.username,
      role_id: user.role_id,
      token: token,
    });
  } catch (error) {
    logger.info(`Error during login: ${error}`);
    // Pass any errors to the error handling middleware
    next(error);
  }
};
