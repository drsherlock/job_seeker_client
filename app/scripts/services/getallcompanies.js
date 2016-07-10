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
    // AngularJS will instantiate a singleton by calling "new" on this function
    var url = "http://localhost:8000/companies/?page=";
    this.getCompanies = function(p) {
    	return $http.get(url+p);
    };
  }]);
