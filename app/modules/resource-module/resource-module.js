"use strict";

var resourceModule = angular.module("resource-module", []);
resourceModule.config(["$stateProvider",
    function ($stateProvider) {
        $stateProvider
            .state("resource", {
                url: "/resource/:id",
                templateUrl: "modules/resource-module/views/resource.html",
                controller: "PostsController"
            });
    }]);

