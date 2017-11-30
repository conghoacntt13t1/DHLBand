var utils=require('utils');

var playerList = [];
module.exports = {
    insertAPlayer : function (playerName) {
        var player = {};
        player.id = playerList.length;
        player.name = playerName;
        player.score = 0;
        playerList[playerList.length].push(player);
    },

    getPlayerList:function () {
        return playerList;
    },

    // getPlayerListByIndex:function (indexArray) {
    //     var playerListWithIndex = [];
    //     var count = 0;
    //     for (var i = 0; i<indexArray.length; i++){
    //         for (var j = 0; j<playerList.length; j++){
    //             if (playerList[j].id === indexArray [i] ){
    //                 playerListWithIndex[count] = playerList[j];
    //                 count ++;
    //                 break;
    //             }
    //         }
    //         console.log("There is no playment with that id in ")
    //     }
    // }

    getPlayerByIndex:function (index) {
        for (var i = 0;i<playerList.length;i++){
            if (playerList[i].playerID===index){
                return playerList[i];
            }
        }
    }
};