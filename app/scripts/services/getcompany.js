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
    // AngularJS will instantiate a singleton by calling "new" on this function
    var url = "http://localhost:8000/companies/";
    this.getCompany = function(p) {
    	return $http.get(url+p);
    };
  }]);
