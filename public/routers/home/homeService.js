angular.module('recipeApp').service('homeService', function($http) {


	this.getHomeRecipes = function (num) {
		return $http ({
			method: 'GET',
			url: '/api/recipes?q=best'+ "&page=" + num,
		});
	}

});
