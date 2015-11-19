angular.module('recipeApp').controller('appetizersCtrl', function($scope, appetizersService, $state) {

	$scope.one =1;
	$scope.two = 2;
	$scope.three = 3;

	$scope.getAppetizers = function(num) {
		appetizersService.getAppetizers(num).then(function(results) {
			$scope.Appetizers = results.data.recipes;
			$state.go('appetizers');
		}).catch(function(err) {
			console.log(err);
		});
	}

	$scope.getAppetizers($scope.one);

}); 