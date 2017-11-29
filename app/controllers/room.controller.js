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
        // $http.get("/game").then(function successCallback(response) {
        //     gameService.setExpressions(response.data);
        //     console.log(response.data);
        // }, function errorCallback(response){
        //     console.log(response);
        // });
        getData('/game', function(data) {
            gameService.setExpressions(data.data);
        });

        $location.path("/game/"+id);
    };

    var getData = function(url, callback) {
        $http.get(url).then(function(response) {
            callback && callback(response);
        });
    };
});