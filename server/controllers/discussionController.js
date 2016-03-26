var db = require('../db');

module.exports = {
  loadComments: function(req, res) {
    var videoid = req.body.videoid;
    db.Comment.findAll({where: {videoID: videoid}})
    .then(function(comments) {
      res.send(200, comments);
    })
    .catch(function(err) {
      throw err;
      res.sendStatus(500);
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
      res.sendStatus(500);
    });
  },

  loadQuestions: function(req, res) {
    var videoid = req.body.videoid;
    db.Question.findAll({where: {videoID: videoid}})
    .then(function(questions) {
      res.send(200, questions);
    })
    .catch(function(err) {
      throw err;
      res.sendStatus(500);
    });
  },

  addQuestion: function(req, res) {
    var question = req.body.content;
    var asker = req.body.asker;
    var videoID = req.body.videoID;
    var userID = req.body.userID;
    db.Question.create({question: question, asker: asker, VideoId: videoID, UserId: userID})
    .then(function() {
      res.sendStatus(201);
    })
    .catch(function(err) {
      throw err;
      res.sendStatus(500);
    });
  },

  addAnswer: function(req, res) {
    var answer = req.body.answer;
    var questionId = req.body.questionID;
    db.Question.findOne({where: {id: questionId}})
    .then(function(question) {
      question.update({answer: answer})
      .then(function() {
        res.sendStatus(200);
      })
      .catch(function(err) {
        throw err;
        res.sendStatus(500);
      });
    })
    .catch(function(err) {
      throw err;
      res.sendStatus(500);
    });
  }
};