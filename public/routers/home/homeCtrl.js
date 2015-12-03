angular.module('recipeApp').controller('homeCtrl', function($scope, homeService, $state) {

	$scope.one =1;
	$scope.two = 2;
	$scope.three = 3;

	$scope.getHomeRecipes = function(num) {
		homeService.getHomeRecipes(num).then(function(results) {
			$scope.homeResults = results.data.recipes;
			// $state.go('home');
		}).catch(function(err) {
			console.log(err);
		});
	}

	$scope.getHomeRecipes($scope.one);

});