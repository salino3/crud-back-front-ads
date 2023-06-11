const express = require("express");
const morgan = require("morgan");
const config = require("./config");

const app = express();
const clients = require("./moduls/clients/routes");
const errors = require("./network/errors");

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuration
app.set("port", config.app.port);

// Routes
app.use("/api/clients", clients);
app.use(errors);

module.exports = app;
