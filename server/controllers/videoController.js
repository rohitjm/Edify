var db = require('../db');

module.exports = {
  // Handles importing a video to the S3 storage 
  addVideo: function (req, res) {
    var video = req.body;
    db.Video.create({
      title: video.title,
      description: video.description,
      cover: video.cover,
      url: video.url,
    })
    .then(function(video) {
      res.send(201, video);
    })
    .catch(function(err) {
      throw err;
      res.status(500);
    });
  },
  // Handles fetching of specified video from S3 storage
  fetchVideo: function (req, res) {
    var query = req.body.query;
    db.Video.findAll({where: {title: {$like : '%' + query + '%'}}})
    .then(function(videos) {
      res.send(videos);
    })
    .catch(function(err) {
      throw err;
      res.status(500);
    });
  },
  fetchUserVideo: function (req, res) {
    db.Video.findAll({where: {userid: req.body.id}})
    .then(function(videos) {
      res.send(videos);
    })
    .catch(function(err) {
      throw err;
      res.status(500);
    });
  },

  fetchAll: function (req, res) {
    db.Video.findAll({})
    .then(function(videos) {
      res.send(videos);
    })
    .catch(function(err) {
      throw err;
      res.status(500);
    });
  }
};