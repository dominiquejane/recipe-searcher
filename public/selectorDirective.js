angular.module('recipeApp').directive('modal', function() {
// 	return {
// 		restrict: 'AE',
// 		link: function(scope, element, attributes) {
// 			var toggle = true;
// 			element.bind('click', function() {
// 				if (toggle === true) {
// 				element.addClass('selected-recipe');
// 				element.find("a").removeClass('is-hidden');
// 				return toggle = false;
// 				}
// 				else if (toggle === false) {
// 				element.removeClass('selected-recipe');
// 				element.find("a").addClass('is-hidden');
// 				return toggle = true;
// 				}
				
// 			});
// 			element.bind('mouseover', function() {
// 				element.css('cursor', 'pointer');
// 			});
			
// 		}
// 	}
// });
  return {
    template: '<div class="modal fade">' + 
        '<div class="modal-dialog">' + 
          '<div class="modal-content">' + 
            '<div class="modal-header">' + 
              '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' + 
              '<h4 class="modal-title">{{ title }}</h4>' + 
            '</div>' + 
            '<div class="modal-body" ng-transclude></div>' + 
          '</div>' + 
        '</div>' + 
      '</div>',
    restrict: 'E',
    transclude: true,
    replace:true,
    scope:true,
    link: function postLink(scope, element, attrs) {
      scope.title = attrs.title;

      scope.$watch(attrs.visible, function(value){
        if(value == true)
          $(element).modal('show');
        else
          $(element).modal('hide');
      });

      $(element).on('shown.bs.modal', function(){
        scope.$apply(function(){
          scope.$parent[attrs.visible] = true;
        });
      });

      $(element).on('hidden.bs.modal', function(){
        scope.$apply(function(){
          scope.$parent[attrs.visible] = false;
        });
      });
    }
  };
});