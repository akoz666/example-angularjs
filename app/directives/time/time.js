"use strict";

var timeDirective = angular.module("time-directive", []);

timeDirective.directive("ngTime", ["dateFilter", "$interval", function (dateFilter, $interval) {
    return {
        scope: {

        },
        restrict: "E",
        template: "{{time}}",
        link: function(scope, element, attrs) {
            scope.time = dateFilter(new Date(), "hh:mm:ss");


            var interval = $interval(function() {
                scope.time = dateFilter(new Date(), "hh:mm:ss");
                console.log("time changed");
            }, 1000);

            element.on("$destroy", function() {
                $interval.cancel(interval);
            });

        }
    }
}]);