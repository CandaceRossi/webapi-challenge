const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const server = express();
const logger = require("./middleware/logger.js");
const actionRouter = require("./action/actionRouter");
// const projectRouter = require("./project/projectRouter");

//global middleware
server.use(helmet());
server.use(express.json());
server.use(logger);
server.use(morgan("server"));

server.use("/api/actions", actionRouter);
// server.use("/api/project", projectRouter);

server.get("/", (req, res) => {
  const nameInsert = req.name ? `${req.name}` : "";
  res.send(`
      <h1>Sprint for the WIN!</h1>
      `);
});

module.exports = server;
