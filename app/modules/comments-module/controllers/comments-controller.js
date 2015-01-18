"use strict";


var commentsController = angular.module("comments-module");
commentsController.controller("CommentsController", ["$scope", "$stateParams", "Post", "$rootScope", function ($scope, $stateParams, Post, $rootScope) {

    $rootScope.loading = true;

    $scope.newComment = {};

    var success = function (post) {
        $scope.post = post;
        //$scope.title = post.title;
        //$scope.comments = post.comments;
        $rootScope.loading = false;
    };
    var fail = function (msg) {
        console.log(msg);
    };

    Post.getPost($stateParams.id).then(success, fail);


    $scope.addComment = function () {
        var nbre = Math.floor((Math.random() * 9) + 1);
        $scope.newComment.photo = "http://lorempicsum.com/futurama//350/200/" + nbre;
        $scope.newComment.picture = "http://lorempicsum.com/futurama//80/80/" + nbre;
        $scope.post.comments.push($scope.newComment);

        Post.add($scope.newComment).then(function () {

        }, function () {
            console.log("Error !!!");
            $scope.comments.push($scope.newComment);
        });

        $scope.newComment = {};
    };

    $scope.selectComment = function(index) {
        alert(index);
    }

}]);


/*

 "picture": "http://lorempicsum.com/futurama//80/80/9",
 "photo": "http://lorempicsum.com/futurama//350/200/9",

 */