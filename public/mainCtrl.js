angular.module('recipeApp').controller('mainCtrl', function($scope, mainService, $state) {

	$scope.one =1;
	$scope.two = 2;
	$scope.three = 3;
	

	$scope.getSearch = function(num) {
		// $scope.searchResults = {title: "Oops! Nothing showed up. Try searching for something by using the search bar above. Or click on one of the links to the left."};
		mainService.getSearch($scope.searchBar, num).then(function(results) {
			console.log(results.data.recipes);
			$scope.searchResults = results.data.recipes;
			$state.go('search');
		}).catch(function(err) {
			console.log(err);
		});

	};



	// $scope.pages;
	// $scope.show = 0; 
	// $scope.pageToggle = function (pages) {
	// 	$scope.show++;
	// 	if ($scope.show > 0) {
	// 		pages.removeClass('is-hidden');
	// 		console.log($scope.show);
	// 	}
	// }

}); 