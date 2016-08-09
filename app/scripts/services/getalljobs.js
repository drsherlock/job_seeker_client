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
    this.getJobs = function(p) {
    	var url = "http://localhost:8000/jobs/api/?page="+p;
    	return $http.get(url);
    };
  }]);
