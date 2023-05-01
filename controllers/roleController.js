const roleService = require("../services/roleService");
const logger = require("../utils/logger");

/**
 * Add a new role
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {function} next - The next middleware function
 * @returns {Promise<Object>} A promise that resolves to a JSON response
 */
exports.addRole = async (req, res, next) => {
  try {
    logger.info("Add role request received:", req.body); // Log the request

    // Destructure name from request body
    const { name } = req.body;

    // Check if role already exists
    if (!(await roleService.isUniqueRole(name))) {
      return res.status(400).json({ error: "Role already exists" });
    }

    // Add new role, set the status to 201 and return the new role
    const newRole = await roleService.addRole(name);
    logger.info("New role created:", newRole); // Log the created role
    return res.status(201).json(newRole);
  } catch (error) {
    logger.error("Error adding role:", error); // Log any errors
    // Pass any errors to the error handling middleware
    next(error);
  }
};
