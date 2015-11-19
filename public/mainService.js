angular.module('recipeApp').service('mainService', function($http) {

	var key = 'acad7af756569cadc835890eb19f2a57';

	this.getSearch = function (searchTerm, num) {
		return $http ({
			method: 'GET',
			url: '/api/recipes?q=' + searchTerm + "&page=" + num,
		}); 
	}

});