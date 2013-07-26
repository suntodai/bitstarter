var express = require('express');
var app = express.createServer(express.logger());
var fs=require('fs');
var buf = new Buffer(256);

buf.write(fs.readFileSync('index.html','utf-8'));
var content = buf.toString('utf8',0,buf);
console.log("write: "+content);
app.get('/', function(request, response) {
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
