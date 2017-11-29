var express = require('express');
var app=express();
var http=require('http').createServer(app);

app.use(express.static(__dirname + ''));

// app.use(require("./Server/Game"));
app.use(require('./Server/Route'));
http.listen(16969,function () {
    console.log("The Server is listening at port: 16969");
});
require('./Server/socket.js')(http);