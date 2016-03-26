var Sequelize = require('sequelize');
const config = require('../config/database.json');
const env = config.production;

// Fill in with your own mysql info (you'll probably be using root-user too)
//                     db-name , user  ,  password
// var db = new Sequelize('thesis', 'test', 'password');

var db = new Sequelize(
 env.database,
 'rootPROD',
 'passwordPROD',
  {
    port: env.port,
    host: env.host,
    logging: console.log
  });

// User schema
var User = db.define('User', {
  username: {type: Sequelize.STRING, unique: true},
  password: Sequelize.STRING,
  aboutMe:  {type: Sequelize.STRING, allowNull: false, defaultValue: ""}
});
// Video schema
var Video = db.define('Video', {
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  url:Sequelize.STRING,
  cover:Sequelize.STRING,
  // upVotes:Sequelize.INTEGER,
  // downVotes:Sequelize.INTEGER
});

//Comment schema
var Comment = db.define('Comment', {
  content: Sequelize.STRING,
  userID: Sequelize.STRING,
  videoID:Sequelize.STRING,
  postedAt:Sequelize.STRING
});

// Category schema
var Category = db.define('Category', {
  name: Sequelize.STRING
});

//Votes's schema
var Votes = db.define('Votes', {
  videoID: Sequelize.STRING,
  userID: Sequelize.STRING,
  upVote:Sequelize.INTEGER,
  downVote:Sequelize.INTEGER
},{
    timestamps: false
});

// Sets up many-to-many relationship between Video and Category (creates join table Video_Category)
// Category.belongsToMany(Video, {through: 'Video_Category'});
// Video.belongsTo(Category, {through: 'Video_Category'});

// Sets up one-to-many relationship between User and Video and Category and Video
Video.belongsTo(User);
User.hasMany(Video);

// Syncs schemas with mysql, creating the actual tables in the DB
User.sync()
.then(function() {
  Video.sync()
  .then(function() {
    Category.sync()
    .then(function() {
      Comment.sync()
      .then(function() {
        Votes.sync()
        .then(function() {
          console.log('Tables successfully created');
        })        
        .catch(function(err) {
        });
      })
      .catch(function(err) {
        throw err;
      });
    })
    .catch(function(err) {
      throw err;
    });
  })
  .catch(function(err) {
    throw err;
  });
})
.catch(function(err) {
  throw err;
});

exports.Comment = Comment;
exports.User = User;
exports.Video = Video;
exports.Category = Category;
exports.Votes = Votes;
exports.db = db;
