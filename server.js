var express = require('express');
var app=express();
var http=require('http').createServer(app);
var io=require('socket.io').listen(http);

app.use(express.static(__dirname + ''));

io.on('connection',function (socket) {
    
});


app.listen(16969);