"use strict";

var tabsDirective = angular.module("tabs-directive", []);

tabsDirective.directive("ngTabs", function () {
    return {
        scope: {},
        restrict: "E",
        templateUrl: "directives/tabs/_tabs.html",
        transclude: true,
        controller: function($scope) {
            $scope.tabs = [];
            $scope.select = function(tab) {
                angular.forEach($scope.tabs, function(t) {
                    t.selected = false;
                });
                tab.selected = true;
            }
            this.add = function(tab) {
                if($scope.tabs.length == 0) {
                    $scope.select(tab);
                }
                $scope.tabs.push(tab)
            }
        }
    }
});

tabsDirective.directive("ngTab", function () {
    return {
        scope: {
            title: "@"
        },
        restrict: "E",
        templateUrl: "directives/tabs/_tab.html",
        transclude: true,
        require: "^ngTabs",
        link: function(scope, element, attrs, tabsCtrl) {
            scope.selected = false;
            tabsCtrl.add(scope);
        }
    }
});
