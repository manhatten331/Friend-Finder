var friendsData = require("../data/friends.js");
var match = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        var newUser = req.body;

        var elonScore = friendsData.scores;

        //match.push(newUser);

        //console.log(newUser)

        //totalDifference = 0;

        for (var i = 0; i  < newUser.scores.length ; i++) {
           newUser.scores[i] = parseInt(newUser.scores[i]);
        }

        var Index = 0;
        var minDiff = 40;
        
        for (var i = 0; i < match.length; i++) {
            var totalDifference = 0;
            for(var u = 0; u < match[i].scores.length; u++) {
                var difference = Math.abs(newUser.scores[u] - match[i].scores[u]);
                console.log(difference);
                totalDifference += difference;
                //console.log(totalDifference);
            }
            
            if (totalDifference < minDiff) {
                Index = i;
                minDiff = totalDifference;
                //console.log(minDiff);
                //console.log(totalDifference);
            }
        }
    });
}