"use strict";

var tabsModule = angular.module("tabs-module", []);
tabsModule.config(["$stateProvider",
    function ($stateProvider) {
        $stateProvider
            .state("tabs", {
                url: "/tabs/:id",
                templateUrl: "modules/tabs-module/views/tabs.html",
                controller: "CommentsController"
            });
    }]);

