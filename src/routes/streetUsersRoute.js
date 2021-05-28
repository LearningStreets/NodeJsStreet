// In this file we will declare our route path such that user can do get put post etc. operations


// importing express such that we can create instance of Router
var express = require('express');

// creating instance of Router 
var streetUserRoute = express.Router();

// importing the model to get the data
var streetUsersModel = require('../models/streetUsersModel');

// importing the route from the const file
const  routeConstants  = require('../assets/constantFiles/routeConstants');
 
streetUserRoute.route(routeConstants.route_StreetUsers) // defining route path which will help to call it from browser or client as API call
 .get(function(req,res){
   // here User is the document name which is coming from the model export
   var query = req.query
   streetUsersModel.find(query,function (err, events){
   //streetUsersModel.find(function (err, events){
    console.log(err) 

if(err)
  console.log(err)
else
    res.json(events);
  });
})

.post(function(req, res){
  // creating instance of the model
 var streetUser = new streetUsersModel(req.body)
  // streetUser.save()
  res.status(201).send(streetUser)
});


// defining route path which will help to call it from browser or client as API call
// by specifying userID we should be able to get the specific user name
streetUserRoute.route(routeConstants.route_StreetUsersSearchBy_userID) 
 .get(function(req,res){
  // here User is the document name which is coming from the model export
  streetUsersModel.findById(req.params.userID, function (err, events){
   console.log(err) 

if(err)
 console.log(err)
else
   res.json(events);
 });
})
 


module.exports = (streetUserRoute);