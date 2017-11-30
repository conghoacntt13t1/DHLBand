app.controller('LoginController', function ($scope,playerService) {
    init();

    function init() {

    	$scope.players = playerService.getPlayerList();
    }

    $scope.insertPlayer = function () {
        var idCurrent = playerService.insertPlayer($scope.name);
        console.log(idCurrent);
        window.location.replace("/#!/room");
    };

    $scope.deletePlayer = function (id) {
        playerService.deletePlayer(id);
        console.log($scope.players);
    };
});