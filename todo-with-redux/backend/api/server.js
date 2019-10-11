require("dotenv").config();
const express = require("express");

const server = express();

// import routes
const usersRoutes = require("../routes/usersRoutes");
const todosRoutes = require("../routes/todosRoutes");

server.use(express.json());
server.use("/api/users", usersRoutes);
server.use("/api/todos", todosRoutes);

server.get("/", (req, res) => {
  res.status(200).json({ message: "API is up..." });
});

module.exports = server;
