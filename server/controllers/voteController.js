var db = require('../db');

module.exports = {
  upVotes: function (req, res) {
    var videoID = req.body.videoID;
    var userID = req.body.userID;
    if (userID !== undefined){
      db.Votes.findAll({where: {videoID: videoID, userID: userID}})
      .then(function(vote) {
        if(vote.length === 0) {
          db.Votes.create({videoID: videoID, userID: userID, upVote: 1, downVote:0})
          .then(function() {
            // db.Votes.find({
            //   attributes: [[db.fn('COUNT', db.col(upVote)),'upVote'], 'downVote'],
            //   include: [{
            //   attributes : [],
            //    where: {
            //     videoID: videoID}}]
            //})
            db.db.query("select SUM(upVote) as upVote from Votes where videoID = "+videoID, {type: db.db.QueryTypes.SELECT})
            .then(function(voteCount) {
              db.Video.findOne({where: {id: videoID}})
              .then(function(video) {
                video.updateAttributes({
                  upVotes: voteCount[0].upVote
                })
                .then(function(){
                  db.Video.findOne({where: {id: videoID}})
                  .then(function(video){
                    res.send(video);
                  });
                });
              });
            })
            .catch(function(err) {
              throw err;
              res.sendStatus(500);
            });
          }) ;  
        }
      });  

      // .catch(function(err) {
      //   throw err;
      //   res.status(500);
      // });
      
    } 

  },
  downVotes: function (req, res) {
    var videoID = req.body.videoID;
    var userID = req.body.userID;
    db.Votes.findAll({where: {videoID: videoID, userID: userID}})
    .then(function(vote) {
      if(vote.length === 0) {
        db.Votes.create({videoID: videoID, userID: userID, upVote: 0, downVote:1})
        .then(function() {
          // db.Votes.find({
          //   attributes: [[db.fn('COUNT', db.col(upVote)),'upVote'], 'downVote'],
          //   include: [{
          //   attributes : [],
          //    where: {
          //     videoID: videoID}}]
          //})
          db.db.query("select SUM(downVote) as downVote from Votes where videoID = "+videoID, {type: db.db.QueryTypes.SELECT})
          .then(function(voteCount) {
            db.Video.findOne({where: {id: videoID}})
            .then(function(video) {
              video.updateAttributes({
                downVotes: voteCount[0].downVote
              })
              .then(function(){
                db.Video.findOne({where: {id: videoID}})
                .then(function(video){
                  res.send(video);
                });
              });
            });
          })
          .catch(function(err) {
            throw err;
            res.sendStatus(500);
          });
        });   
      }
    });   
  }
};
