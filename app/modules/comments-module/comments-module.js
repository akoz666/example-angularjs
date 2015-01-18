"use strict";

var commentsModule = angular.module("comments-module", []);
commentsModule.config(["$stateProvider",
    function ($stateProvider) {
        $stateProvider
            .state("comments", {
                url: "/comments/:id",
                templateUrl: "modules/comments-module/views/comments.html",
                controller: "CommentsController"
            });
    }]);

