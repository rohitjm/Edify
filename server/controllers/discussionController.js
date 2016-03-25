var db = require('../db');

module.exports = {
  loadComments: function(req, res) {
    var videoid = req.body.videoid;
    db.Comment.findAll({where: {videoID: videoid}})
    .then(function(comments) {
      res.send(comments);
    })
    .catch(function(err) {
      throw err;
      res.sendstatus(500);
    });
  },

  addComment: function(req, res) {
    var content = req.body.content;
    var videoID = req.body.videoID;
    var userID = req.body.userID;
    db.Comment.create({content: content, videoID: videoID, userID: userID})
    .then(function() {
      res.sendStatus(201);
    })
    .catch(function(err) {
      throw err;
      res.sendstatus(500);
    });
  },

  loadQuestions: function(req, res) {
    var videoid = req.body.videoid;
    db.Question.findAll({where: {videoID: videoid}})
    .then(function(questions) {
      res.send(questions);
    })
    .catch(function(err) {
      throw err;
      res.sendstatus(500);
    });
  }
};