var db = require('../db');

// initialize table with all categories
// db.Category.bulkCreate([
//   {name: 'Arts'},
//   {name: 'Literature'},
//   {name: 'Languages'},
//   {name: 'History'},
//   {name: 'Music'},
//   {name: 'Philosophy'},
//   {name: 'Medicine'},
//   {name: 'Science'},
//   {name: 'Engineering'},
//   {name: 'Mathematics'},
//   {name: 'Cooking'},
//   {name: 'Business'},
//   {name: 'Education'},
//   {name: 'Sports'},
//   {name: 'Other'},
// ])
// .then(function() { 
//   return db.Category.findAll();
// })
// .then(function(categories) {
//   console.log(categories);
// });

module.exports = {
  loadCategories: function(req, res) {
    db.Category.findAll()
    .then(function(categories) {
      res.send(categories);
    })
    .catch(function(err) {
      throw err;
      res.sendstatus(500);
    });
  }
};