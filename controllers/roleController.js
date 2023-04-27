const roleService = require("../services/roleService");

/**
 * This function is used to add a new role
 *
 * @param req - Request object
 * @param res  - Response object
 * @param next - Next middleware
 * @returns status code 201 and new role if successful
 */
exports.addRole = async (req, res, next) => {
  try {
    // destructure name from request body
    const { name } = req.body;

    // If role already exists
    if (!(await roleService.isUniqueRole(name))) {
      return res.status(400).json({ error: "Role already exists" });
    }

    // Add new role, set the status to 201 and return the new role
    const newRole = await roleService.addRole(name);
    res.status(201).json(newRole);
  } catch (error) {
    next(error);
  }
};
