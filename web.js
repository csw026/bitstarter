var fs = require("fs");
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var resultstr = fs.readFileSync("./index.html");
  var buf = new Buffer(resultstr); 
  response.send(buf.toString("utf8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
