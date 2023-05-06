const taskService = require("../services/taskService");
const logger = require("../utils/logger");

/**
 * Creates a new task and adds it to the database.
 *
 * @param {Object} req - The request object.
 * @param {Object} req.body - The request body containing the name and user ID of the new task.
 * @param {string} req.body.name - The name of the new task.
 * @param {string} req.body.user_id - The ID of the user who owns the new task.
 *
 * @param {Object} res - The response object.
 *
 * @param {Function} next - The next function to be called.
 *
 * @returns {Object} A JSON object containing a message indicating the success of the operation.
 */
exports.createTask = async (req, res, next) => {
  try {
    // Log the task creation request
    logger.info(`Task creation request received: ${JSON.stringify(req.body)}`);

    // Extract the name and user ID of the new task from the request body
    const { name, user_id } = req.body;

    // Create the new task using the taskService module
    const newTask = await taskService.createTask(name, user_id);

    // Log the newly created task
    logger.info(`Task created: ${JSON.stringify(newTask)}`);

    // Return a success message
    return res.status(201).json({
      message: "Task created successfully",
    });
  } catch (error) {
    // Log any errors that occurred during the operation and call the error-handling middleware
    logger.info(`Error creating task: ${error}`);
    next(error);
  }
};
