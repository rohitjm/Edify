var db = require('../db');

module.exports = {

	loadComments: function(req, res) {
		//console.log("inside load comments ",req.body);
		var videoid = req.body.videoid;
		db.Comment.findAll({where: {videoID: videoid}}).then(function(comments) {
			res.send(comments);
		})		
	},

	addComment: function(req, res) {
		//insert comment into db
	}
}