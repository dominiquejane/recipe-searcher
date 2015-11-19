angular.module('recipeApp').directive('selectorDirective', function() {
	return {
		restrict: 'AE',
		link: function(scope, element, attributes) {
			var toggle = true;
			element.bind('click', function() {
				if (toggle === true) {
				element.addClass('selected-recipe');
				element.find("a").removeClass('is-hidden');
				return toggle = false;
				}
				else if (toggle === false) {
				element.removeClass('selected-recipe');
				element.find("a").addClass('is-hidden');
				return toggle = true;
				}
				
			});
			element.bind('mouseover', function() {
				element.css('cursor', 'pointer');
			});
			
		}
	}
});