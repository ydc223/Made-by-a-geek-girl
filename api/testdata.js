var express = require('express');
var http = require('http');
var path = require('path');
//fs - the filesystem module that allow to read/write from the disk
var fs =  require('fs');
// var i18n = require('i18n');
var User = require('./user');

var mongoose = require('mongoose');
var router = express.Router();

// i18n.configure({
//   // setup some locales - other locales default to en silently
//   locales: ['uk', 'en'],
//
//
//   // where to store json files - defaults to './locales'
//   directory: __dirname + '/locales'
// });
//
//
// // i18n init parses req for language headers, cookies, etc.
// app.use(i18n.init);


exports.test = function(req, res, err){
  if(err)
    console.log(err);

  var new_response = new User(req.query);
  console.log(req.query);

  User.find({}, function(err, users) {
    if (err) throw err;

    // object of all the users
    console.log(users);
    console.log(users.length);

  })

}
