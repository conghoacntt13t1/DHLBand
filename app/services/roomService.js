app.service('roomService',function () {
    this.getRommList=function () {
        return roomList;
    };

    this.getRoom = function(roomID){
        for(var i=0; i<roomList.length;i++){
            if(roomList[i].roomID===roomID){
                return roomList[i];
            }
        }
        return null;
    };

    this.insertRoom=function (roomName) {
        var topRoomID=roomList.length+1;
        roomList.push({
            roomID:topRoomID,
            roomName:roomName,
            playerListInRoom:[
                {

                }
            ]
        })
    };

    var roomList=[
        {
            roomID: "R01",
            name: "Room 01",
            playerListInRoom: [
                {

                }
            ]
        }
    ];
});