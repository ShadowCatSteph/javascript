/**
 * A simple file server 
 */

 //use strict environment.  
'use strict'

//dependencies.  None external
let http = require('http'); //http
let fs = require('fs'); //file serving capabilities
let path = require('path'); // lets us use "string".pathext()


//config
const ip = '127.0.0.1'; //localhost
const port = 3000; //port

//create server

http.createServer(function(request, response){

});


