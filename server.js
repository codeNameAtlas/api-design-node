// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data


var express = require('express')

var app = express();

var jsonData = {count: 12, message: 'hey'};

app.get('/', function(req, res) {
  //render the index.html file
  res.sendFile(__dirname + '/index.html', function(err) {
    if (err) {
      res.status(500).send(err);
    }
  })
});

app.get('/data', function(req, res) {
  var data = JSON.stringify(jsonData)
  res.send(data);
  //alternatively
  //res.json(jsonData);
})

app.listen(8080);

