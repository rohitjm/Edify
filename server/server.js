var express = require('express');

var app = express();

require('./config/middleware')(app, express);
require('./config/routes')(app, express);

app.listen(8000, function() {
  console.log('Listening on port 8000...')
});

exports = app;