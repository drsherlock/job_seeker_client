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
    	var url = "http://localhost:8000/companies/api/?page="+p;
    	return $http.get(url);
    };
  }]);
