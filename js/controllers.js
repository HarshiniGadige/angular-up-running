var artistControllers = angular.module('artistControllers',[]);

artistControllers.controller('ListController',function MyController($scope,$http){
	$http.get('js/data.json').success(function(data){
		$scope.artists = data;
		$scope.artistOrder = 'name';
	});
});

artistControllers.controller('DetailsController',function MyController($scope,$http,$routeParams){
	$http.get('js/data.json').success(function(data){
		$scope.artists = data;
		$scope.whichItem = $routeParams.itemId;
	});
});