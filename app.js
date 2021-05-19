// var msg = "Node: Hello World Program"
// console.log(msg);


// importing express package such that we can utilize it's features
var express = require('express');

// Creating a instance for express
var app = express();
var port = 3005; // declaring the port such that we can run the application on this 

// Basic Get method which will return the message. 
app.get('/', function(req, res) {
  res.send('Node: Hello World Program');
})

// declaring below listen method which will listen on the assigned port number
app.listen(port, function() {
  console.log('Logging this - Node: Hello World Program')
})