'use strict';

/**
 * @ngdoc directive
 * @name jobSeekerApp.directive:searchBoxDirective
 * @description
 * # searchBoxDirective
 */
angular.module('jobSeekerApp')
  .directive('searchBoxDirective', function () {
    return {
      templateUrl: 'templates/searchbox-template.html',
      restrict: 'E',
      scope: { 'obj': "=",
             },
      controller: function () {},
      controllerAs: 'dirCtrl',
      bindToController: true
    };
  });
