var friendsData = require("../data/friends.js");
var match = require("../data/friends.js");

module.exports = function (app) {

    app.get("/data/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/data/friends", function (req, res) {
        var newUser = req.body;

        for (var i = 0; i  < newUser.scores.length ; i++) {
           newUser.scores[i] = parseInt(newUser.scores[i]);
        }

        var Index = 0;
        var maxDiff = 40;
        
        for (var i = 0; i < match.length; i++) {
            var totalDifference = 0;
            for(var u = 0; u < match[i].scores.length; u++) {
                var difference = Math.abs(newUser.scores[u] - match[i].scores[u]);
                //console.log(difference);
                totalDifference += difference;
                //console.log(totalDifference);
            }
            
            if (totalDifference < maxDiff) {
                Index = i;
                maxDiff = totalDifference;
                //console.log(minDiff);
                //console.log(totalDifference);
            }
        }
        match.push(newUser);

        res.json(friendsData[i]);
    });
}