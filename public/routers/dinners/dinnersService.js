angular.module('recipeApp').service('dinnersService', function($http) {

	var key = 'acad7af756569cadc835890eb19f2a57';

	this.getDinners = function (num) {
		return $http ({
			method: 'GET',
			url: '/api/recipes?q=dinner' + "&page=" + num,
		});
	}

});