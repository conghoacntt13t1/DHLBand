var express = require('express');
var app=express();
var http=require('http').createServer(app);
// var io=require('socket.io').listen(http);


app.use(express.static(__dirname + ''));

// io.on('connection',function (socket) {
//
// });



http.listen(16969,function () {
    console.log("The Server is listening at port: 16969");
});
//
var utils = require('./Server/utils');
var data = utils.getExpressionList();
console.log(data);
app.get("/game",function (request, response) {
    response.send(data);
    // response.redirect("/game");
});
require('./Server/socket.js')(http);