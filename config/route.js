const express = require("express");
const router = express.Router();

const roleController = require("../controllers/roleController");
const authController = require("../controllers/authController");
const taskController = require("../controllers/taskController");

/**
 * Adds a new role to the database.
 *
 * @name POST/api/role/create
 * @function
 * @memberof module:routers
 * @inner
 *
 * @param {string} path - The Express path to handle the request.
 * @param {Function[]} middleware - An array of middleware functions to handle the request.
 */
router.post("/api/role/create", roleController.addRole);

/**
 * Registers a new user and adds them to the database.
 *
 * @name POST/api/auth/register
 * @function
 * @memberof module:routers
 * @inner
 *
 * @param {string} path - The Express path to handle the request.
 * @param {Function[]} middleware - An array of middleware functions to handle the request.
 */
router.post("/api/auth/register", authController.register);

/**
 * Authenticates a user and generates a JWT token.
 *
 * @name POST/api/auth/login
 * @function
 * @memberof module:routers
 * @inner
 *
 * @param {string} path - The Express path to handle the request.
 * @param {Function[]} middleware - An array of middleware functions to handle the request.
 */
router.post("/api/auth/login", authController.login);

/**
 * Creates a new task and adds it to the database.
 *
 * @name POST/api/task/create
 * @function
 * @memberof module:routers
 * @inner
 *
 * @param {string} path - The Express path to handle the request.
 * @param {Function[]} middleware - An array of middleware functions to handle the request.
 */
router.post("/api/task/create", taskController.createTask);

module.exports = router;
