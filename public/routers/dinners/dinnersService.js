angular.module('recipeApp').service('dinnersService', function($http) {


	this.getDinners = function (num) {
		return $http ({
			method: 'GET',
			url: '/api/recipes?q=dinner' + "&page=" + num,
		});
	}

});