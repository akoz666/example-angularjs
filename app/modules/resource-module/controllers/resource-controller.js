"use strict";
var resourceController = angular.module("resource-module");

resourceController.controller("PostsController", ["$scope", "$rootScope", "PostRes", function ($scope, $rootScope, PostRes) {
    $rootScope.loading = true;
    $scope.newpost = {};


    $scope.posts = PostRes.query(function() {
        console.log("content loaded", $scope.posts.length);
        $rootScope.loading = false;
    });


    //$scope.post = Post.get({id:1}, function() {
        //update in db
        //$scope.post.name = "Update first article";
        //$scope.post.content = "Update first content";
        //$scope.post.$update();
    //});

    $scope.post = false;

    $scope.editPost = function() {
        //Post.update({id:1}, $scope.post, callback);
        $scope.post.$update(function() {
            $scope.post = false;
        });


        //User.get({userId:123})
        //    .$promise.then(function(user) {
        //        $scope.user = user;
        //    });

    }

    $scope.showEditPost = function(post) {
        //$scope.post = Post.get({id:post.id}, function() {
        //    console.log("get post", $scope.post.id)
        //});
        $scope.post = post;
    }

    $scope.newPost = function() {
        var post = Post.save(null, $scope.newpost, function() {
            $scope.posts.push(post);
            $scope.newpost = {};
        });
    }


    //save in db
    //var post = new Post;
    //post.name = "My second article";
    //post.content = "My second content";
    //post.$save();

}]);


