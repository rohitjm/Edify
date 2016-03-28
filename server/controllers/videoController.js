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
      UserId: video.user.id,
      CategoryId: video.categoryId
    })
    .then(function(video) {
      res.send(201, video);
    })
    .catch(function(err) {
      throw err;
      res.sendStatus(500);
    });
  },
  // Handles fetching of specified video from S3 storage
  fetchVideo: function (req, res) {
    var query = req.body.query;
    var queryType= req.body.queryType;
    console.log("queryType is;", queryType);
    var search ={};
    search[queryType] =  {$like : '%' + query + '%'};
    db.Video.findAll({where: search})
    .then(function(videos) {
      res.send(200, videos);
    })
    .catch(function(err) {
      throw err;
      res.sendStatus(500);
    });
  },
  fetchUserVideo: function (req, res) {
    db.Video.findAll({where: {userid: req.body.id}})
    .then(function(videos) {
      res.send(200, videos);
    })
    .catch(function(err) {
      throw err;
      res.sendStatus(500);
    });
  },

  fetchAll: function (req, res) {
    db.Video.findAll({})
    .then(function(videos) {
      res.send(200, videos);
    })
    .catch(function(err) {
      throw err;
      res.sendStatus(500);
    });
  },

  fetchWatchList: function (req, res) {
    var userId = req.userID;
    db.db.query('select * from videos inner join watchlistvideos on (videos.id = watchlistvideos.videoid) inner join users on \
                (watchlistvideos.userid = users.id) where users.id ='+userId)
    .then(function(data) {
      var videos = data.rows;
      res.send(200, videos);
    })
    .catch(function(err) {
      throw err;
      res.send(500);
    });
  },



};