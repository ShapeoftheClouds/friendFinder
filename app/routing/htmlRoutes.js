var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');

var app = express();


// Creates a GET route to /survey which displays the survey page
app.get('/survey', function(req, res) {
  if (err)
    {
      throw err;
    }

  res.render('survey');
});

// Import routes and give the server access to them.
app.use(function(req, res){
  res.render('/home');
})

// Has a default USE route that leads to home.html which displays the home page
