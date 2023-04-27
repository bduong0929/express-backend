const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors()); // for cross origin resource sharing
app.use(express.json()); // for parsing application/json
app.use((err, req, res, next) => {
  console.log(err.stack); // Error handling middleware
  res.status(500).send({
    message: "An error occurred",
  });
});

// Import models
require("./config/models");

// Import routes
const routes = require("./config/route");
app.use(routes);

// Port
const port = 8080;
app.listen(port, () => console.log(`Server is running on port ${port}`));
