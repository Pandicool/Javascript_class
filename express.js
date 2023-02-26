var express = require('express');
var app = express();
var ejs = require('ejs');
const fs = require('fs');

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }))

app.get('/', function(req, res) {
    res.render("login", {
        title: 'Movie Ticket: login'
    })
})

app.get('/signup', function(req, res) {
    res.render("signup", { title: 'Movie Ticket: Signup' });
})

app.post('/signup', function(req, res) {
    const signupData = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        newPassword: req.body.newPassword,
        confirmPassword: req.body.confirmPassword,
    }
    if (fs.existsSync("signupData.json")) {
        var data = fs.readFileSync("signupData.json", "utf8");
        var obj = JSON.parse(data);
        obj.push(signupData);
        fs.writeFileSync('signupData.json', JSON.stringify(obj), "utf8");
    } else {
        var obj = []
        obj.push(signupData);
        fs.appendFileSync('signupData.json', JSON.stringify(obj), "utf8");
    }
    res.render("login", { title: 'Movie Ticket: login' });
})

app.post('/login', function(req, res) {
    const loginData = {
        username: req.body.username,
        password: req.body.password,
    }
    var data = fs.readFileSync("signupData.json", "utf8");
    data = JSON.parse(data);
    data.forEach(obj => {
        if (obj.firstname == loginData.username && obj.newPassword == loginData.password) {
            res.render("home", { title: 'Movie Ticket: Home' });
        } else {
            res.setHeader("Content-Type", "text/html");
            res.write("<h2>Hello World</h2>");
            res.end();
        }
    });
})

var server = app.listen(8000, () => {
    var port = server.address().port
    console.log("App listening at http://localhost:%s", port)
})