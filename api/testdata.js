var express = require('express');
var http = require('http');
var path = require('path');
//fs - the filesystem module that allow to read/write from the disk
var fs =  require('fs');
// var i18n = require('i18n');
var User = require('./user');

var mongoose = require('mongoose');
var router = express.Router();

exports.test = function(req, res, err){
  if(err)
    console.log(err);

  var new_response = new User(req.query);
  console.log(req.query);

  User.find({}, function(err, users) {
    if (err) throw err;

    // object of all the users
    // console.log(users);

    console.log(users.length);
    // res.setHeader("Content-Type", "application/json");
    res.json(users);
    res.end();

  })
};

exports.translations = function(req, res, err){
  if(err)
    console.log(err);
    var obj = JSON.parse(fs.readFileSync('./public/paidGrade/public/data/translations.json'));
    // res.setHeader("Content-Type", "application/json");
    res.json(obj);
    res.end();
};
