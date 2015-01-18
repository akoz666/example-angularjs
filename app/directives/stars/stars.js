"use strict";

var starDirective = angular.module("star-directive", []);

starDirective.directive("starRating", function () {
    return {
        restrict: "A", //A E C  M
        templateUrl: "directives/stars/_stars.html",
        //template:'<ul class="rating"><li ng-repeat="star in stars" ng-class="star">\u2605</li> </ul>',
        scope: {
            ratingValue: "=",
            max: "="
        },
        link: function (scope, elem, attrs) {
            scope.stars = [];
            for (var i = 0; i < scope.max; i++) {
                scope.stars.push({
                    filled: i < scope.ratingValue
                });
            }
        }
    }
});