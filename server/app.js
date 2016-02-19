"use strict";

var express = require("express");
var app = express();

app.use( express.static(__dirname + '/../client'));

app.get('/sports', function(request, response){
	response.json(['Weightlifting', 'Cycling']);
});

app.listen(8188, function() {
 console.log('listening on 8181');
});