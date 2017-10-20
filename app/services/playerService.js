app.service('playerService', function () {
    this.getPlayerList=function () {
        return playerList;
    }
    this.insertPlayer=function (name) {
        var topID=playerList.length+1;
        playerList.push({
            id: topID,
            name:name,
            score:0
        })
    };

    var playerList=[
        {

        }
    ]
});