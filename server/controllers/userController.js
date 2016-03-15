var db = require('../db');

module.exports = {
  // Handles signing up a new user and adding them to the database
  userSignUp: function (req, res) {
    db.User.findOrCreate({where: {username: req.body.username}, defaults: {password: req.body.password}})
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

    // !!!!!!!!!!!!!! Passport replaces the need for any of the commented code below; keep for now to be safe !!!!!!!!!!!!!!!!!

    // db.User.findOne({where: {username: req.body.username}})
    // .then(function(user) {
    //   if (!user) {
    //     console.log("Username doesn't exist!");
    //     res.sendStatus(401);
    //   }
    //   // TODO: Add password salting/hashing (Passport ?)
    //   if (user.password === req.body.password) {
    //     //Create new user session, redirect user to some other page (Welcome page ?)
    //     res.sendStatus(200);
    //   }
    // })
    // .catch(function(err) {
    //   console.log(err);
    // })
    res.send('User signed in!');
  },

  // Handles user signing out and removes their existing session
  userSignOut: function (req, res) {
    // Built in function provided by Passport
    req.logout();
    console.log('User logged out!');
    // Redirect or do something else to let user know they successfully loged out
  }
};