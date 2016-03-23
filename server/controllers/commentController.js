var db = require('../db');

module.exports = {

	loadComments: function(req, res) {
		var videoid = req.body.videoid;
		db.Comment.findAll({where: {videoID: videoid}}).then(function(comments) {
			res.send(comments);
		})		
	},

	addComment: function(req, res) {
		//insert comment into db
	}
}