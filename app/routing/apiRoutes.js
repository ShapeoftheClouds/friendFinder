// My JS goes here!
// Has a GET route with the URL /api/friends -- Used to display a JSON of all possible friends
app.get('/api/friends', function(req, res) {
  if (err)
    {
      throw err;
    }

  res.render('survey');
});

// Has a POST route /api/friends -- Used to handle incoming survey results. This route will be used to handle the compatibility logic

// Data should be saved as an array of objects
