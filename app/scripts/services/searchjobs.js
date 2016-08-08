'use strict';

/**
 * @ngdoc service
 * @name jobSeekerApp.searchJobs
 * @description
 * # searchJobs
 * Service in the jobSeekerApp.
 */
angular.module('jobSeekerApp')
  .service('searchJobs', ['$http', function ($http) {
    this.searchJob = function(p, q) {
    	var url = "https://job-seeker-india.herokuapp.com/jobs/search/"+q+"/api/?page="+p;
    	return $http.get(url);
    };
  }]);
