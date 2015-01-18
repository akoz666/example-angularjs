"use strict";

var homeModule = angular.module("home-module", []);
homeModule.config(["$stateProvider",
    function ($stateProvider) {
        $stateProvider
            .state("home", {
                url: "/home",
                templateUrl: "modules/home-module/views/home.html",
                controller: "HomeController"
            });
    }]);