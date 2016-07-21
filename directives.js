'use strict';

angular
.module('CollectionDirective', [])
.directive(
	'sebTooltip', 
	function() {
  return {
	  restrict: "A",
      replace: false,
      transclude: false,
      link: function (scope, element, attrs, controllers) {
		  var item = scope.$eval(attrs.item);

		  var photoPath = 'photos/' + item.brand + '/' + item.platform + '/' + item.type + '/' + item.reference + '.JPG';

    	  element.tooltip({
    		  'template' : '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    		  'title' : '<img width=160 src="' + photoPath + '"/><br/>' + item.name + '<br/>S/N : ' + item.serial,
			  'html':true
    	  });
      }
  };
});