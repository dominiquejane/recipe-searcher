angular.module('recipeApp').service('mainService', function($http) {


	this.getSearch = function (searchTerm, num) {
		return $http ({
			method: 'GET',
			url: '/api/recipes?q=' + searchTerm + "&page=" + num,
		}); 
	}

});