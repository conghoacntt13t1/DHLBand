app.controller('RankingController', function ($scope,rankingService) {
    init();

    function init() {
    	$scope.rankings = rankingService.getRankingList();
    	console.log($scope.rankings);
    }
});