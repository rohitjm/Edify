var userController = require('../controllers/userController');
var videoController = require('../controllers/videoController');
var passport = require('./authentication').passport;
var ensureAuthenticated = require('./authentication').ensureAuthenticated;


module.exports = function(app, express) {
  // Handles request to sign up new user
  app.post('/signup', userController.userSignUp);

  // Handles request to sign in existing user
  app.post('/signin', passport.authenticate('local'), userController.userSignIn);

  // Handles user sign out
  app.post('/signout', userController.userSignOut);
};