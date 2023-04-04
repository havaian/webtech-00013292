// Import necessary modules
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// Set up custom logging tool
const fs = require("fs");
// const logger = require("./app/logs/logger.js");
const morganLogFile = fs.createWriteStream("./app/logs/morgan.log", { flags: "a" });
const logFile = fs.createWriteStream("./app/logs/access.log", { flags: "a" });

// Require dotenv config
require("dotenv").config();

// Init express app
const app = express();

// Set up cors
var corsOptions = {
    origin: "*",
};
app.use(cors(corsOptions));

// Set up logger tools
app.use(morgan("combined", { stream: morganLogFile }));
app.use((req, res, next) => {
    logFile.write(`\n${Date(Date.now())} - [ ${req.method} || ${res.statusCode} ] - ${req.url}`);
    next();
});

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(
    express.urlencoded({
        extended: true,
    })
);

// Setting express default folder for views to /app/views
app.set("views", __dirname + "/public/views");

// Setting express view engine to ejs
app.set("view engine", "ejs");

// Configuring /public directory as default for assets
app.use(express.static(__dirname + "/public"));

// Import routes
app.use(require("./app/routes/routes.js"));

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Port: ${PORT} ✅`);
    logFile.write(`\nPort: ${PORT} ✅`);
});
