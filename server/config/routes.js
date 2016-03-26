var userController = require('../controllers/userController');
var videoController = require('../controllers/videoController');
var voteController = require('../controllers/voteController');
var discussionController = require('../controllers/discussionController');
var passport = require('./authentication').passport;
var ensureAuthenticated = require('./authentication').ensureAuthenticated;

module.exports = function(app, express) {
  // Handles request to sign up new user
  app.post('/signup', userController.userSignUp);

  // Handles request to sign in existing user
  app.post('/signin', passport.authenticate('local'), userController.userSignIn);

  // Handles user sign out
  app.get('/signout', userController.userSignOut);

  // Handles fetching inital videos from db to populate video grid on home page
  app.get('/fetch', videoController.fetchAll);
  
  // Handles fetching uploaded videos from db to populate video grid on profile page
  app.post('/fetch', videoController.fetchUserVideo);
  
  // Handles fetching videos that match the specified search query
  app.post('/search', videoController.fetchVideo);

  // Handles adding a new video to the db
  app.post('/addVideo', videoController.addVideo);

  // Load comments for current Video
  app.post('/loadComments', discussionController.loadComments);

  // Add new comment to db
  app.post('/addComment', ensureAuthenticated, discussionController.addComment);

  // Load questions for current Video
  app.post('/loadQuestions', discussionController.loadQuestions);

  // Add new question to db
  app.post('/addQuestion', discussionController.addQuestion);
  
  // Increases the upvote of certain video
  app.post('/upVote', voteController.upVotes);
  
  // Increases the upvote of certain video
  app.post('/downVote', voteController.downVotes);

  //Handles adding about me on the profile page
  app.post('/aboutMe', userController.editAboutMe);

  // Add's answer to an existing question
  app.post('/addAnswer', discussionController.addAnswer);
};