angular.module('recipeApp').service('appetizersService', function($http) {

	var key = 'acad7af756569cadc835890eb19f2a57';

	this.getAppetizers = function (num) {
		return $http ({
			method: 'GET',
			url: '/api/recipes?q=appetizers' + "&page=" + num,
		});
	};

}); 