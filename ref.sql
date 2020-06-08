// Dependency of express
var express = require("express");

// Establishing PORT and the app
var PORT = process.env.PORT || 8080;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public/"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + 'public/'));

//Dependency of handlebars
var exphbs = require("express-handlebars");

//Setting up handlebars specs
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Controller
var routes = require("./controllers/crimeController");

app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
