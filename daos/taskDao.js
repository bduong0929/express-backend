const Task = require("../models/task");

/**
 * Saves a new task to the database.
 *
 * @param {Object} task - The task object to be saved.
 * @param {string} task.name - The name of the task.
 * @param {boolean} task.completed - The status of the task completion.
 * @param {string} task.user_id - The ID of the user associated with the task.
 *
 * @returns {Promise<Object>} The created task object.
 */
exports.save = async (task) => {
  // Create a new task object with the provided properties
  const createdTask = await Task.create({
    name: task.name,
    completed: task.completed,
    user_id: task.user_id,
  });

  // Return the created task object
  return createdTask;
};
