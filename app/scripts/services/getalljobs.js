'use strict';

/**
 * @ngdoc service
 * @name jobSeekerApp.getAllJobs
 * @description
 * # getAllJobs
 * Service in the jobSeekerApp.
 */
angular.module('jobSeekerApp')
  .service('getAllJobs', ['$http', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var url = "http://localhost:8000/jobs/?page=";
    this.getJobs = function(p) {
    	return $http.get(url+p);
    };
  }]);
