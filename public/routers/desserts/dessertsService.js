angular.module('recipeApp').service('dessertsService', function($http) {

	var key = 'acad7af756569cadc835890eb19f2a57';

	this.getDesserts = function (num) {
		return $http ({
			method: 'GET',
			url: '/api/recipes?q=desserts' + "&page=" + num,
		});
	}

});