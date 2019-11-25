const http = require('http');
var app = require('./handles');


// Declare an http server
http.createServer(app.handleRequest).listen(8080)