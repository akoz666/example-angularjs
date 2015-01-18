"use strict";

var datePickerDirective = angular.module("date-picker-directive", []);

datePickerDirective.directive("datepicker", function () {
    return {
        restrict: "C",
        scope: {
          options : "=datepickerOptions"
        },
        link: function(scope, element, attrs) {
            $(element).datepicker(scope.options);
        }
    }
});