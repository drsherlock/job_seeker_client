'use strict';

/**
 * @ngdoc service
 * @name jobSeekerApp.getCompany
 * @description
 * # getCompany
 * Service in the jobSeekerApp.
 */
angular.module('jobSeekerApp')
  .service('getCompany', ['$http', function ($http) {    
    this.getCompany = function(p) {
    	var url = "http://localhost:8000/companies/"+p+"/api";
    	return $http.get(url);
    };

    this.searchCompanyJob = function(p, q) {
    	var url = "http://localhost:8000/companies/"+p+"/search/"+q+"/api";
    	return $http.get(url);
    };
  }]);
