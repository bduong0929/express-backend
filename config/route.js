const express = require("express");
const router = express.Router();

const roleController = require("../controllers/roleController");
const authController = require("../controllers/authController");

router.post("/api/role/create", roleController.addRole);
router.post("/api/auth/register", authController.register);
router.post("/api/auth/login", authController.login);

module.exports = router;
