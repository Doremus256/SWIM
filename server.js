// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static("public"));

// Requiring our models for syncing
var db = require("./models");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const api = require("./routes/api-routes"); 

app.use("/api", api);
app.use("/", require("./routes/html-routes"));
// Sets up the Express app to handle data parsing

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

});

