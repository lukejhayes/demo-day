var path = require("path");

module.exports = function(app) {
    app.get("/login", function(req, res){
        res.sendFile(path.join(__dirname, "../login/build/index.html"))
    })

    app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../index.html"))
})

}
