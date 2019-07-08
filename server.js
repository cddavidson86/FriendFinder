var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.listen(PORT, () => console.log("Listening on port 3000"));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

// // Basic route that sends the user first to the AJAX Page
// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "app/public/home.html"));
// });

// app.get("/survey", function(req, res) {
//   res.sendFile(path.join(__dirname, "app/public/survey.html"));
// });