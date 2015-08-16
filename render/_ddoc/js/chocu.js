
//'use strict';

angular.module('Chocu', []);

angular.module('Chocu')
    .controller('View', function ($scope) {
    });


angular.module('Chocu')
    .controller('Edit', function ($scope) {
    });


angular.module('Chocu')
    .directive('chokuToHtml', function($window) {
        return {
            scope: true,
            restrict: 'A',
            link: function(scope, element, attrs) {
                // Get the expression to watch from the choku-to-html attr
                var expr = attrs.chokuToHtml;
                scope.$watch(expr, function(newval, oldval) {
                    // On change, get the markdown property's value,
                    // if any.  It should contain markdown text.
                    var markdown =
                        newval &&
                        newval.hasOwnProperty('markdown') &&
                        newval.markdown != null ?
                        newval.markdown : "";

                    // Convert it to html and insert into the element.
                    element.html($window.Markdown.toHTML(markdown));
                }, true);
            },
        };
    })
    .directive('chokuContent', function($window) {
        return {
            scope: false,
            restrict: 'A',
            link: function(scope, element, attrs) {
                // Get the expression to watch from the choku-to-html attr
                var varname = attrs.chokuContent; // FIXME trim space
                
                element.val(scope[varname] = element.text());
/*                
                scope.$watch(varname, function(newval, oldval) {
                    // Acts like ng-model, except it initialises
                    // the value from the HTML content
                    console.log(">>"+varname);
                    element.val(newval);
                });
*/
                element.on('input', function() {
                    scope.$apply(function() { 
                    scope[varname] = element.val();
                    });
                });
            },
        };
    });
