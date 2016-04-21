
angular.module('recipeApp').service('appetizersService', function($http) {


	this.getAppetizers = function (num) {
		return $http ({
			method: 'GET',
			url: '/api/recipes?q=appetizers' + "&page=" + num,
		});
	};

}); 