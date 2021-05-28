
// MongoDB Connectivity
var mongoose = require('mongoose');

// importing Connection String
var dbConstants = require('./src/assets/constantFiles/dbConstants');  

// connecting to database
 var db = mongoose.connect(dbConstants.connectionString_DB_NodeJsStreet); // we are connected now

// importing express to use basic feature of its that will make this app run on the port
var express = require('express');

// importing port number on which our application will run
var appConstants = require('./src/assets/constantFiles/appConstants');

// Creating a instance for express
var app = express(); 

// importing body-parser to make use of post operation to post the data into json format
var bodyParser= require('body-parser')


const  v1Template = require('./src/routes/v1Template');
 
// importing the router which we want to show when user go to that path
const  streetUserRoute = require('./src/routes/streetUsersRoute');

// importing default routes
const  routeConstants = require('./src/assets/constantFiles/routeConstants');
 

 
// default get Method
  app.get(routeConstants.route_Prefix, function(req, res) {
    res.send(v1Template);
  })
  
// Below is the code that makes other app to communicate with it
// app.use(function(req, res, next){
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

 // assigning user of body-parser such that we can use post operation
 app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({extended:true}))

 // assigning all the routes 
 app.use(routeConstants.route_Prefix, streetUserRoute); 

// declaring below listen method which will listen on the assigned port number
 app.listen(appConstants.portNumber, function() {
    // console.log('Running on port ' + port);
 })
 
