//dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
//express
var app = express();
var PORT = process.env.PORT || 2020;

//bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

//external routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

//listening to the PORT
app.listen(PORT, function() {
    console.log('Friend Finder app is listening on PORT: ' + PORT);
  });