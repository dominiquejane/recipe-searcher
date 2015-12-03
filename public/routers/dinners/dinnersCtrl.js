angular.module('recipeApp').controller('dinnersCtrl', function($scope, dinnersService, $state) {

	$scope.one =1;
	$scope.two = 2;
	$scope.three = 3;

	$scope.getDinners = function(num) {
		dinnersService.getDinners(num).then(function(results) {
			$scope.Dinners = results.data.recipes;
			// $state.go('dinners');
		}).catch(function(err) {
			console.log(err);
		});
	}

	$scope.getDinners($scope.one);

});