app.service('playerService', function () {
    this.getPlayerList=function () {
        return playerList;
    };
    this.insertPlayer=function (name) {
        var topID=playerList.length+1;
        playerList.push({
            id: topID,
            name:name,
            score:0
        })

        return topID;
    };
    this.deletePlayer=function (id) {
        for (var i=playerList.length - 1; i >= 0; i--){
            if (playerList[i].id==id){
                playerList.splice(i,1);
            }
        }
    };
    this.getPlayer=function (id) {
        for (var i = 0; i<playerList.length; i++){
            if (playerList[i].id===id){
                return playerList[i];
            }
        }
        return null;
    };
    this.editPlayerScore=function (id) {
        for (var i = 0; i<playerList.length; i++){
            if(playerList[i].id===id){
                return playerList[i].score;
            }
        }
        return null;
    };

    var playerList=[
    ]
});