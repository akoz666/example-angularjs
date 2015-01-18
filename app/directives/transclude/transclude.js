"use strict";

var transcludeDirective = angular.module("test-transclude-directive", []);

transcludeDirective.directive("ngTestTransclude", function () {
    return {
        scope: {
            company : "@"
        },
        restrict: "A",
        template: "<div><strong>{{company}}</strong><div ng-transclude></div></div>",
        transclude: true
    }
});
