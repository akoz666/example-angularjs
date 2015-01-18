"use strict";

var homeModule = angular.module("home-module");
homeModule.factory("Post", ["$http", "$q", "$timeout", function ($http, $q, $timeout) {
    var factory = {
        posts: false,
        getPosts: function () {
            var deferred = $q.defer();
            if (factory.posts != false) {
                deferred.resolve(factory.posts);
            } else {
                $http.get("posts.json")
                    .success(function (data, status) {
                        $timeout(function () {
                            factory.posts = data;
                            deferred.resolve(factory.posts);
                        }, 1000);
                    })
                    .error(function (data, status) {
                        deferred.reject("impossible to get data");
                    });
            }
            return deferred.promise;
        },
        getPost: function (id) {
            var deferred = $q.defer();
            var post = {};
            factory.getPosts().then(function (posts) {
                angular.forEach(posts, function (value, key) {
                    if (value.id == id) {
                        post = value;
                        deferred.resolve(post);
                    }

                }, function () {
                    deferred.reject("Error : ");
                });
            });
            return deferred.promise;
        },
        add: function() {
            var deferred = $q.defer();
            //...
            deferred.resolve();
            return deferred.promise;
        }
    }
    return factory;
}]);