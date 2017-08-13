
var path = require('path');

// Creates a GET route to /survey which displays the survey page
module.exports = function(app) {
  app.get('/survey', function(req, res)
  {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  // A default USE route that leads to home.html which displays the home page
  app.use(function(req, res)
  {
    res.sendFile(path.join(__dirname, "/../public/home.html"))
  });
};
