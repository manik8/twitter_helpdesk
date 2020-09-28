var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var passport = require("passport");
var Strategy = require("passport-twitter").Strategy;
var session = require("express-session");
var http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World\n");
  })
  .listen(3000, "127.0.0.1");
console.log("Server running at http://127.0.0.1:3000/");
passport.use(
  new Strategy(
    {
      consumerKey: "JAABlOt9wzw9dyr8SASkPjRrj",
      consumerSecret: "ki0m1aFKtdYisdalDQUOHnfOS0EI5XC1Iez1xbhx0Htox2NwrI",
      callbackURL: "http://localhost:3000",
    },
    function (token, tokenSecret, profile, callback) {
      return callback(null, profile);
    }
  )
);

passport.serializeUser(function (user, callback) {
  callback(null, user);
});

passport.deserializeUser(function (user, callback) {
  callback(null, user);
});

var app = express();

app.set("views", path.join(__dirname), "views");
app.set("view engine", "manik");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    secret: "whatever",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("hello");
});
module.exports = app;
