const express = require("express");
const cors = require("cors");
const sequelize = require('./config/sequelize');
const { User, Task, Role } = require('./config/relationships');

const app = express();

app.use(cors()); // for cross origin resource sharing
app.use(express.json()); // for parsing application/json
app.use((err, req, res, next) => {
  console.log(err.stack); // Error handling middleware
  res.status(500).send({
    message: "An error occurred",
  });
});

// Import endpoints
const routes = require("./config/route");
app.use(routes);

// Port
const port = 8080;
app.listen(port, () => console.log(`Server is running on port ${port}`));

// Sync the database and start the server
sequelize
  .sync()
  .then(() => {
    console.log('Database synced');
    app.listen(process.env.PORT || 3000, () => console.log('Server started'));
  })
  .catch((err) => console.log('Error syncing database:', err));
