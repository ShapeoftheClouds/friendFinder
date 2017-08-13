var tableData = require("../data/friends");
// Has a GET route with the URL /api/friends -- Used to display a JSON of all possible friends
module.exports = function(app) {
  app.get('/api/friends', function(req, res)
  {
    if (err)
      {
        throw err;
      }

    res.json(tableData);
  });

  // Has a POST route /api/friends -- Used to handle incoming survey results.
  // This route will be used to handle the compatibility logic
  app.post('/api/friends', function(req, res)
  {
      tableData.push(req.body);
      res.json(true);
  });
};
