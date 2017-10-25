app.controller('RoomController', function ($scope,roomService) {
    init();

    function init() {
    	$scope.rooms = roomService.getRoomList();
    }

    $scope.insertRoom = function () {
        idCurrent = roomService.insertRoom($scope.nameRoom);
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
});