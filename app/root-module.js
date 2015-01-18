"use strict";

var myApp = angular.module("myApp", [
    "ui.router",
    "home-module",
    "comments-module",
    "star-directive",
    "comment-directive",
    "time-directive",
    "date-picker-directive",
    "test-transclude-directive",
    "tabs-module",
    "tabs-directive",
    "ngResource",
    "resource-module",
    "countrySelect"

]);

myApp.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
}]);

angular.isUndefinedOrNull = function(val) {
    return angular.isUndefined(val) || val === null
};