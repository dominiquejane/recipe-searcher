
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
// var port = 8080;
var port = process.env.PORT || 8080;
var request = require('request');

// app.set('port', (process.env.PORT || port));

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
  console.log('listening on port: ', port);
});

// app.listen(app.get('port'), function() {
//   console.log('Node app is running on port', app.get('port'));
// });

app.get('/api/recipes', function(req, res) {
  console.log("req.query", req.query);
  request({
    method: 'GET',
    url: 'http://food2fork.com/api/search?key=acad7af756569cadc835890eb19f2a57',
    qs: req.query,
  }, function(err, resp, body) {
    if (err) return res.json(err);
    console.log("body", body);
    return res.send(body);
  });
});
