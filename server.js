var Gun = require('gun/gun');
var file = require('gun/lib/file');
var wsp = require('gun/lib/wsp');

var gun = Gun({
  file: 'data.json'
});

gun.load('todo/data').blank(function(){
  console.log("Initializing Data ............ ");
  gun.set({ '1':'Buy Milk', '2':'Grow a garden', '3':'help pigs fly'}).key('todo/data');
});

var express = require('express');

var app     = express();
gun.attach(app);
app.use(express.static(__dirname)).listen(8080);
console.log('Server running at http://127.0.0.1:8080/');
