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
    	var url = "https://job-seeker-india.herokuapp.com/jobs/api/?page="+p;
    	return $http.get(url);
    };
    
    this.searchJob = function(p, q) {
    	var url = "https://job-seeker-india.herokuapp.com/jobs/search/"+q+"/api/?page="+p;
    	return $http.get(url);
    };
  }]);
