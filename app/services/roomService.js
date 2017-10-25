app.service('roomService',function () {
	this.getRoomList=function () {
        return roomList;
    };
	this.insertRoom=function (name) {
        var topID=roomList.length+1;
        roomList.push({
            id: topID,
            name:name
        })

        return topID;
    };
    this.deleteRoom=function (id) {
        for (var i=roomList.length - 1; i >= 0; i--){
            if (roomList[i].id==id){
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
	    },
    ]
});