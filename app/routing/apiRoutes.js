var friends = require("../data/friends");
// Has a GET route with the URL /api/friends -- Used to display a JSON of all possible friends
module.exports = function(app) {
  app.get('/api/friends', function(req, res)
  {
    if (err)
      {
        throw err;
      }

    res.json(friends);
  });

  // Has a POST route /api/friends -- Used to handle incoming survey results.
  // This route will be used to handle the compatibility logic
  app.post('/api/friends', function(req, res)
  {
      // Assign request body into var
      var requestBody = req.body;
      var requestTotal = total(requestBody);

      console.log(requestTotal);
      // Loop through existing friends array or table data
      var bestFriend = {};
      var bestFriendDif = 51;

      for (var friend of friends) {
        var friendTotal = total(friend);
        var friendDifference = Math.abs(requestTotal - friendTotal);
        if (friendDifference === 0) {
          bestFriend = friend;
          break;
        } else if (friendDifference < bestFriendDif) {
          bestFriendDif = friendDifference;
          bestFriend = friend;
        }
      };
      // calculate the difference between friend array question values and request body question values
      friends.push(requestBody);
      // console.log(req.body);
      res.json(bestFriend);
  });

  function total(friend) {
    var friendTotal = 0;

    for (var key in friend) {
      if (key != "name" && key != "photo") {
        friendTotal = friendTotal + friend[key];
      }
    };
    return friendTotal;
  }

};
