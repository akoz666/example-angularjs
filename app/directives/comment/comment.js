"use strict";

var commentDirective = angular.module("comment-directive", []);

commentDirective.directive("ngComment", function () {
    return {
        scope: {
            com : "=", //isolation
            com2: "@com",
            select: "&select"
        },
        restrict: "E",
        templateUrl: "directives/comment/_comment.html"
    }
});