var express = require('express');
var os = require("os");
var pjson = require('./package.json');

var app = express();
var hostname = os.hostname();

app.get('/', function(req, res){
   res.send({
           "status": "OK",
           "message": "Index Route coming from server: " + hostname,
           "version": pjson.version,
           "timestamp": new Date().toISOString()
        });
});

app.get('/health-check', function(req, res){
    res.send({"status": "OK", "message": "I'm alive!", "timestamp": new Date().toISOString()});
});

app.get('/shutdown', function(req, res){
    res.send({"status": "OK", "message": "Shutting down app", "timestamp": new Date().toISOString()});
});

app.listen(3000);
