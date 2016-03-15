var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var db = require('../db');

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

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  db.User.findOne({where: {id: id}})
  .then(function(user) {
    done(null, user);
  })
  .catch(function(err) {
    return done(err);
  });
});

module.exports = passport;
