var resourceModule = angular.module("resource-module");

resourceModule.factory("PostRes", ["$resource", function($resource){
    return $resource("http://localhost:3000/posts/:id.json", null, {
        "update" : {method: "PUT", params: {id:"@id"}}
    });
}]);