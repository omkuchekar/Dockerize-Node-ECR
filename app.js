var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello Programmers. This is First sample nodeJS application.Need to dockerize this and deploy on AWS cloud!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});