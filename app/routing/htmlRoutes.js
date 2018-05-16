
var path = require("path");

module.exports = function(app) {
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(_dirname, "../public/survey.html"));
    })
    app.use("/home", function(req, res) {
        res.sendFile(path.join(_dirname, "../public/home.htm"));
    });
};