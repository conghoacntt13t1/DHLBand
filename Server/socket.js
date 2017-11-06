module.exports = function (server) {
    var io = require('socket.io').listen(server);
    console.log("The Server is starting");

    io.sockets.on('connection',function (socket) {
        socket.on('join',function () {
            
        });
        socket.on('spot-click',function () {
            
        });


    });
};