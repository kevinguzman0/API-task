const taskRoutes = require("./routes/tasks");
const express = require("express");

require("dotenv").config();
require("./config/db")();

const app = express();

app.use(express.json());

// set routes
app.use("/tasks", taskRoutes);

module.exports = app;
