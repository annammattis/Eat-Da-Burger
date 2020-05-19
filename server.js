// var express = require("express");

// var PORT = process.env.PORT || 8080;

// var app = express();


// // app.set('port', process.env.PORT || 3001);

// // // Express only serves static assets in production
// // if (process.env.NODE_ENV === 'production') {
// //   app.use(express.static('client/build'));

// // }
// // Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));

// // app.use(favicon(_dirname+'/public/favicon.ico'));
// // Parse application body
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Set Handlebars.
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// // Import routes and give the server access to them.
// var routes = require("./controllers/burgersController.js");

// // app.get('/', function(req, res){
// //   res.redirect('/todo');
// // });

// app.use(routes);

// // Start our server so that it can begin listening to client requests.
// app.listen(PORT, function(){
//   console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
// });






// server.js

/**
 * Required External Modules
 */
const express = require("express");

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || 8080;
/**
 *  App Configuration
 */
// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars", "pug");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
/**
 * Routes Definitions
 */
app.get("/", (req, res) => {
    // res.status(200).send('index.html');
    res.sendFile(path.join(__dirname + "views/layouts/main.handlebars"));
})
app.get("/", (req, res) => {
    res.render("main.handlebars", { title: "Home" });
  });
/**
 * Server Activation
 */
app.listen(port, () => {
    console.log('Running on localhost:8080');
});