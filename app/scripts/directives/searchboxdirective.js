'use strict';

/**
 * @ngdoc directive
 * @name jobSeekerApp.directive:searchBox
 * @description
 * # searchBox
 */
angular.module('jobSeekerApp')
  .directive('searchBoxDirective', function () {
    return {
      restrict: 'E',
      scope: { 'obj': "=",
             },
      controller: function () {},
      controllerAs: 'dirCtrl',
      bindToController: true,
      templateUrl: 'templates/searchbox-template.html'
    };
  });
