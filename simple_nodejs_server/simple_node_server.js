/**************************************************************************
A simple uninteresting server made with nodejs and no external dependencies
***************************************************************************/


//strict mode environment
'use strict'

// import http module
let http = require('http');

//config
const ip = '127.0.0.1'; //localhost
const port = 3000;

//create server

http.createServer(function(request, response) {
    console.log('request ', request.url);
}).listen(port, ip);

console.log("Simple server running at " + ip + " on port " + port);