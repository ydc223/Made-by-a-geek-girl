var express = require('express');
var http = require('http');
var path = require('path');
//fs - the filesystem module that allow to read/write from the disk
var fs =  require('fs');
// var i18n = require('i18n');
var mongoose = require('mongoose');
var User = require('./user');
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


exports.submitBribe = function(req, res, err){
  if(err)
    console.log(err);

  var new_response = new User(req.query);
  console.log(req.query);

	new_response.save(function(err) {
    if (err) throw err;
    User.find({}, function(err, users) {
      if (err) throw err;

      // object of all the users
      console.log(users);
    });
  })

	var obj = JSON.parse(fs.readFileSync('./public/paidGrade/public/data/bribe.json'));

  obj.push(req.query);
  console.log(obj);
  fs.writeFile('./public/paidGrade/public/data/bribe.json', JSON.stringify(obj), function(err){
    if(err)
      throw err;
    else{
      console.log('added a new report to the database');
      // res.setHeader("Content-Type", "application/json");
      // res.json(obj);
      res.end();
    }

  // obj.push(new_comment);
  // console.log(obj);

    console.log('User saved successfully!');
  });
}
