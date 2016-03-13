var db = require('../db');

module.exports = {
  // Handles signing up a new user and adding them to the database
  userSignUp: function (req, res) {
    // TODO: Need to fix this to to add password as well
    db.User.findOrCreate({where: {username: req.body.username}})
    // .spread handles situation when more than 1 argument is returned from DB query (e.g. when using findOrCreate)
    .spread(function(user, created) {
      if (!created) {
        console.log('Username already exists!');
        res.sendStatus(200);
      }
      console.log('User created successfully');
      res.sendStatus(201);
    });
  },

  // Handles signing in an existing user and checking they entered the correct username/password
  userSignIn: function (req, res) {
    db.User.findOne({where: {username: req.body.username}})
    .then(function(user) {
      if (!user) {
        console.log("Username doesn't exist!");
        res.sendStatus(401); //Is this the correct status code for this situation?
      }
      // TODO: Add password salting/hashing (Passport ?)
      if (user.password === req.body.password) {
        //Create new user session, redirect user to some other page (Welcome page ?)
        res.sendStatus(200);
      }
    })
  }
}