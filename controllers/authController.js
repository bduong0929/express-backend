const userService = require("../services/userService");

/**
 * This function is used to register a new user
 *
 * @param req
 * @param res
 * @param next
 */
exports.register = async (req, res, next) => {
  try {
    const { username, password, confirmPassword } = req.body;

    if (!userService.isValidUsername(username)) {
      return res.status(422).json({
        error:
          "Username must be 8-20 characters long, no _ or . at the beginning or end and no __ or _. or ._ or .. inside",
      });
    }

    if (!(await userService.isUniqueUsername(username))) {
      return res.status(409).json({
        error: "Username already exists",
      });
    }

    if (!userService.isValidPassword(password)) {
      return res.status(422).json({
        error:
          "Password must be 8-20 characters long, at least one letter, one number and one special character",
      });
    }

    if (!userService.isSamePassword(password, confirmPassword)) {
      return res.status(400).json({
        error: "Password and confirm password must match",
      });
    }

    await userService.register(username, password);
    return res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    next(error);
  }
};
