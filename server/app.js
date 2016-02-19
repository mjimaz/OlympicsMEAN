"use strict";

var express = require("express");
var app = express();

app.use( express.static(__dirname + '/../client'));

app.listen(8181, function() {
 console.log('listening on 8181');
});