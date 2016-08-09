'use strict';

/**
 * @ngdoc service
 * @name jobSeekerApp.searchCompanies
 * @description
 * # searchCompanies
 * Service in the jobSeekerApp.
 */
angular.module('jobSeekerApp')
  .service('searchCompanies', ['$http', function ($http) {
    this.searchCompany = function(p, q) {
    	var url = "https://job-seeker-india.herokuapp.com/companies/search/"+q+"/api/?page="+p;
    	return $http.get(url);
    };
  }]);
