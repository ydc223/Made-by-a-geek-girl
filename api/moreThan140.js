var http = require('http');
var express = require('express');
var path = require('path');
var fs = require('fs');
var router = express.Router();



/*
var app = new express();
app.set('port', 8080);

http.createServer(app).listen(app.get('port'), function(){
    console.log('server started on port', app.get('port'));
});
app.use(express.static('public'));*/



exports.submitComments =  function(req, res, err){
  if(err)
    console.log(err);

  var new_comment = req.query;

  console.log(new_comment);
  var obj = JSON.parse(fs.readFileSync('./public/moreThan140/map/public/data/comments.json'));

  obj.push(new_comment);
  console.log(obj);
  fs.writeFile('./public/moreThan140/map/public/data/comments.json', JSON.stringify(obj), function(err){
    if(err)
      throw err;
    else{
      console.log('added new subscriber to the database');
      console.log('name',new_comment.name);
      console.log('text',new_comment.text);

      // res.setHeader("Content-Type", "application/json");
      res.json(obj);
      res.end();
    }
  });
}


exports.fetchComments = function(req, res, err){
  if(err)
    console.log(err);

  var obj = JSON.parse(fs.readFileSync('./public/moreThan140/map/public/data/comments.json'));

  fs.writeFile('./public/moreThan140/map/public/data/comments.json', JSON.stringify(obj), function(err){
    if(err)
      throw err;
    else{
      console.log('Displaying the data');
      // res.setHeader("Content-Type", "application/json");
      res.json(obj);
      res.end();
    }
  });
}

