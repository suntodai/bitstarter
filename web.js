var express = require('express');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
app.use(express.static(__dirname + '/assets'));

  var fs=require('fs');
  buf = new Buffer(fs.readFileSync('index.html','utf-8'));
  response.send(buf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
