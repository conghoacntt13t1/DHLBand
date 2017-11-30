app.service('playerService', function () {
    this.getPlayerList=function () {
        return playerList;
    };
    this.insertPlayer=function (name) {
        var topID=playerList.length+1;
        playerList.push({
            playerID: topID,
            name:name,
            score:0
        });

        return topID;
    };
    this.deletePlayer=function (playerID) {
        for (var i=playerList.length - 1; i >= 0; i--){
            if (playerList[i].playerID===playerID){
                playerList.splice(i,1);
            }
        }
    };
    this.getPlayer=function (playerID) {
        for (var i = 0; i<playerList.length; i++){
            if (playerList[i].playerID===playerID){
                return playerList[i];
            }
        }
        return null;
    };
    this.editPlayerScore=function (playerID) {
        for (var i = 0; i<playerList.length; i++){
            if(playerList[i].playerID===playerID){
                return playerList[i].score;
            }
        }
        return null;
    };

    this.getPlayerID = function (playerName) {
        for (var i = 0;i<playerList.length;i++){
            if(playerList[i].name === playerName){
                return playerList[i].playerID;
            }
        }
    };

    var playerList=[

    ];
});