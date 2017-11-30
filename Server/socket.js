
module.exports = function (server) {
    var io = require('socket.io').listen(server);
    console.log("The Server is starting");

    io.sockets.on('connection',function (socket) {
        console.log("a client has been connected");

        socket.on('player-join',function () {

        });

        socket.on('spot-click',function (data) {
            // console.log(data);
            console.log("blabla");
        });
    });
};