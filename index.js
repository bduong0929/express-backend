const express = require("express");
const app = express();
const cors = require("cors");
const sequelize = require("./config/config");

// import controllers
const roleController = require("./controllers/roleController");
const authController = require("./controllers/authController");

// import models
const Role = require("./models/role");
const User = require("./models/user");

// Established relationships
Role.associate({ User });
User.associate({ Role });

app.use(cors()); // for cross origin resource sharing
app.use(express.json()); // for parsing application/json
app.use((err, req, res, next) => {
  console.log(err.stack); // Error handling middleware
  res.status(500).send({
    message: "An error occurred",
  });
});

// Routes
app.post("/api/role/create", roleController.addRole);
app.post("/api/auth/register", authController.register);
app.post("/api/auth/login", authController.login);

// Sync models with the database
sequelize
  .sync({ alter: true })
  .then(() => console.log("Database synced"))
  .catch((err) => console.log("Error syncing database: ", err));

// Port
const port = 8080;
app.listen(port, () => console.log(`Server is running on port ${port}`));
