app.service('roomService',function () {
    // this.getRommList=function () {
    //     return roomList;
    // };
    //
    // this.getRoom = function(roomID){
    //     for(var i=0; i<roomList.length;i++){
    //         if(roomList[i].roomID===roomID){
    //             return roomList[i];
    //         }
    //     }
    //     return null;
    // };
    //
    // this.insertRoom=function (roomName) {
    //     var topRoomID=roomList.length+1;
    //     roomList.push({
    //         roomID:topRoomID,
    //         roomName:roomName,
    //         playerListInRoom:[
    //             {
    //
    //             }
    //         ]
    //     })
    // };

    // var roomList=[
    //     {
    //         roomID: "R01",
    //         name: "Room 01",
    //         playerListInRoom: [
    //             {
    //
    //             }
    //         ]
    //     }
    // ];

	this.getRoomList=function () {
        return roomList;
    };
	this.insertRoom=function (name) {
        var topID=roomList.length+1;
        roomList.push({
            id: topID,
            name:name
        });

        return topID;
    };
    this.deleteRoom=function (id) {
        for (var i=roomList.length - 1; i >= 0; i--){
            if (roomList[i].id===id){
                roomList.splice(i,1);
            }
        }
    };

    var roomList=[
	    {
	    	id: 1,
	    	name: 'Lorem Ipsum'	
	    },
	    {
	    	id: 2,
	    	name: 'Foo Bar'	
	    },
	    {
	    	id: 3,
	    	name: 'Vempors'	
	    }
    ]

});