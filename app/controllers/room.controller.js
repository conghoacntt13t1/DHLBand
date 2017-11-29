app.controller('RoomController', function ($scope,$http,$location,roomService,gameService) {
    init();

    function init() {
    	$scope.rooms = roomService.getRoomList();
    }

    $scope.insertRoom = function () {
        var idCurrent = roomService.insertRoom($scope.nameRoom);
        console.log(idCurrent);
    };

    $scope.deleteRoom = function (id) {
        roomService.deleteRoom(id);
        console.log($scope.rooms);
    };

    $scope.joinRoom = function (id) {
        roomService.joinRoom(id);
        console.log($scope.rooms);
    };

    $scope.btnRoomOnClick=function (id) {
        console.log("Room id : "+id);

        getData('/game', function(data) {
            console.log(data);
            gameService.setGameTable(data.data);
        });

        $location.path("/game/"+id);
    };

    var getData = function(url, callback) {
        $http.get(url).then(function(response) {
            callback && callback(response);
        });
    };
});