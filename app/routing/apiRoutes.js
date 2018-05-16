//Load Data
//Linking routes to a series of data sources
//Data sources hold arrays of information

var friendsData = require("../data/friends.js");
//Routing 
module.exports = function(app) {

    app.get("/api/friends.js", function(req, res) {
        res.json(friendsData)
    });

    app.post("/api/friends.js", function(req, res) {
        if (friendsData.length < 5) {
            friendsData.push(req.body);
            res.json(true);
        }else{
            
        }
        
    })
}