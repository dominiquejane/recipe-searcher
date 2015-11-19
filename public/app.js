angular.module('recipeApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider, $httpProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'routers/home/home.html',
			controller: 'homeCtrl'
		})
		.state('dinners', {
			url: '/dinners',
			templateUrl: 'routers/dinners/dinners.html',
			controller: 'dinnersCtrl'
		})
		.state('desserts', {
			url: '/desserts',
			templateUrl: 'routers/desserts/desserts.html',
			controller: 'dessertsCtrl'
		})
		.state('appetizers', {
			url: '/appetizers',
			templateUrl: 'routers/appetizers/appetizers.html',
			controller: 'appetizersCtrl'
		})
		.state('search', {
			url: '/searchResults',
			templateUrl: 'routers/search/search.html',
			controller: 'mainCtrl',
		});

});
