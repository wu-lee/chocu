
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
    });
