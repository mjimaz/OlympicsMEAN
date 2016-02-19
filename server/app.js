"use strict";

var express = require("express");
var app = express();
var mongoUtil = require('./mongoUtil');
mongoUtil.connect();

app.use( express.static(__dirname + '/../client'));

app.get('/sports', function(request, response){
	var sports = mongoUtil.sports();
	sports.find().toArray(function(err, docs){
		console.log(JSON.stringify(docs));
		var sportNames = docs.map(function(sport){
			return sport.name;
		});
		
	response.json(sportNames);
	});
});

app.listen(8888, function() {
 console.log('listening on 8888');
});