angular.module('recipeApp').service('homeService', function($http) {

	var key = 'acad7af756569cadc835890eb19f2a57';

	this.getHomeRecipes = function (num) {
		return $http ({
			method: 'GET',
			url: '/api/recipes?q=best'+ "&page=" + num,
		});
	}

});
