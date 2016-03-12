var Sequelize = require('sequelize');
var db = new Sequelize('thesis', 'root', 'Thomas');

var User = db.define('User', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
});

var Video = db.define('Video', {
  title: Sequelize.STRING,
  description: Sequelize.STRING
});

Video.belongsTo(User);
User.hasMany(Video);

User.sync();
Video.sync();

exports.User = User;
exports.Video = Video;