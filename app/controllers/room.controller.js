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
        console.log(id);
        $location.path("/game/"+id);
        $http.get("/game").then(function (response) {

            gameService.setExpressions(response.data);
            console.log(response.data);
        });
    }
});