const express = require("express");
const router = express.Router();

const roleController = require("../controllers/roleController");
const authController = require("../controllers/authController");

/**
 * Route to add a new role
 * @name POST/api/role/create
 * @function
 * @memberof module:routers
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post("/api/role/create", roleController.addRole);

/**
 * Route to register a new user
 * @name POST/api/auth/register
 * @function
 * @memberof module:routers
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post("/api/auth/register", authController.register);

/**
 * Route to authenticate a user and generate a JWT token
 * @name POST/api/auth/login
 * @function
 * @memberof module:routers
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post("/api/auth/login", authController.login);

module.exports = router;
