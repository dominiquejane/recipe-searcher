angular.module('recipeApp').controller('dessertsCtrl', function($scope, dessertsService, $state) {		

	$scope.one =1;
	$scope.two = 2;
	$scope.three = 3;

	$scope.getDesserts = function(num) {
		dessertsService.getDesserts(num).then(function(results) {
			$scope.Desserts = results.data.recipes;
			// $state.go('desserts');
		}).catch(function(err) {
			console.log(err);
		});
	}

	$scope.getDesserts($scope.one);

});