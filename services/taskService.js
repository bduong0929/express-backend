const taskDao = require("../daos/taskDao");

/**
 * Creates a new task and adds it to the database.
 *
 * @param {string} name - The name of the new task.
 * @param {string} user_id - The ID of the user who owns the new task.
 *
 * @returns {Object} The newly created task object.
 */
exports.createTask = async (name, user_id) => {
  // Create a new task object with the provided name, user ID, and default completed status of false
  const newTask = {
    name: name,
    completed: false,
    user_id: user_id,
  };

  // Save the new task object to the database using the taskDao module
  return await taskDao.save(newTask);
};
