'use strict';

/**
 * @ngdoc service
 * @name jobSeekerApp.getAllCompanies
 * @description
 * # getAllCompanies
 * Service in the jobSeekerApp.
 */
angular.module('jobSeekerApp')
  .service('getAllCompanies', ['$http', function ($http) {
    this.getCompanies = function(p) {
    	var url = "https://job-seeker-india.herokuapp.com/companies/api/?page="+p;
    	return $http.get(url);
    };
  }]);
