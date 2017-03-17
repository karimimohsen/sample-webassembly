var express = require('express');
var path = require('path');
var app = express();


app.set('port', 3001);
app.use(express.static(path.join(__dirname, '/../client/app')));
app.use(express.static(path.join(__dirname, '/../client/helper')));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + 'index.html'));
});

var server = app.listen(app.get('port'), function () {
    var port = server.address().port;
    console.log('Magic happens on port ' + port);
});