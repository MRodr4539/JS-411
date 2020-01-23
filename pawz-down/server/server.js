'use strict'; 

var express = require('express');

var app = express();

app.get("/", function(req, res){
    res.status(200).send("Hello from PawzDown");
});

var server = app.listen(process.env.PORT || '5000', function(){
    console.log('App listening on port %s', server.address().port);
    console.log('Press Ctrl+C to quit');
})