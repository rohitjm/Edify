var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var db = require('../db');

// Uses 'passport-local' pre-made strategy to handle standard username and password verification
passport.use(new Strategy(
  function(username, password, done) {
    db.User.findOne({where: {username: username}})
    .then(function(user) {
      if (!user) {
        return done(null, false, {message: 'Username incorrect'}); 
      }
      if (user.password !== password) {
        return done(null, false, {message: 'Password incorrect'}); 
      }
      return done(null, user);
    })
    .catch(function(err) {
      console.log(err);
    });
  }
));

// Handles session stuff (still not entirely sure how exactly)
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

// ^^ Same as above ^^
passport.deserializeUser(function(id, done) {
  db.User.findOne({where: {id: id}})
  .then(function(user) {
    done(null, user);
  })
  .catch(function(err) {
    return done(err);
  });
});

var ensureAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    console.log('You need to log in first!');
    res.sendStatus(401);
    // Redirects or does something else to indicate operation was unsuccessful 
  }
};

module.exports.passport = passport;
module.exports.ensureAuthenticated = ensureAuthenticated;
