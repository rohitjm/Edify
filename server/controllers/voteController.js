var db = require('../db');

module.exports = {
upVotes: function (req, res) {
  var videoID = req.body.videoID;
  var userID = req.body.userID;
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
          console.log(voteCount);
          db.Video.findOne({where: {id: videoID}})
          .then(function(video) {
            video.updateAttributes({
              upVotes: voteCount[0].upVote
            })
            .then(function(){
              db.Video.findOne({where: {id: videoID}})
              .then(function(video){
                console.log("before sending: ",video.upVotes);
                res.send(video);
              })
            })
          })
          })
          .catch(function(err) {
            throw err;
            res.sendStatus(500);
          });
  
  })   
  }})   

  // .catch(function(err) {
  //   throw err;
  //   res.status(500);
  // });

},
downVotes: function (req, res) {
  var videoID = req.body.videoID;
  var userID = req.body.userID;
  db.Votes.findAll({where: {videoID: videoID, userID: userID}})
  .then(function(vote) {
    if(vote === undefined) {
      db.Votes.create({videoID: videoID, userID: userID, upVotes: 0, downVotes:1})
      .then(function() {
        db.Votes.findAll({
          attributes: [
          [sequelize.fn('SUM', sequelize.col('downVotes')),'downVotes']
          ],
          where: {
            videoID: videoID
          }
        }).then(function(voteCount) {
          db.Videos.findAll({where: {videoID: videoID}})
          .then(function(video) {
            video.downVotes = voteCount
            video.save()
            .then(function(video){
              res.sendStatus(201, video.voteCount);
            })
          })
          .catch(function(err) {
            throw err;
            res.sendstatus(500);
          });
        })     
      })
    }
  })
  .catch(function(err) {
    throw err;
    res.status(500);
  });
}
}