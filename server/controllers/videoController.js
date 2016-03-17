var db = require('../db');
//var Video = require('..db/index.js');

module.exports = {
  // Handles importing a video to the S3 storage 

  addVideo: function (req, res) {

  },
  // Handles fetching of specified video from S3 storage
  fetchVideo: function (req, res) {
    console.log("inside fetchVideo req:", req.body.title);
    db.Video.findOne({where: {title: req.body.title}}).then(function(videos){
      console.log("videos:", videos);
      res.send(videos);
    });
  },
  // Handles user search input and fetches related videos
  searchForVideos: function (req, res) {

  },

  fetchAll: function (req, res) {
    console.log("inside fetchAll");
    db.Video.findAll().then(function(videos){
      res.send(videos);
    });
  }
};