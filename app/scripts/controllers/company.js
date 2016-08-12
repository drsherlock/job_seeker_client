'use strict';

/**
 * @ngdoc function
 * @name jobSeekerApp.controller:CompanyCtrl
 * @description
 * # CompanyCtrl
 * Controller of the jobSeekerApp
 */
angular.module('jobSeekerApp')
  .controller('CompanyCtrl', ['getCompany', '$routeParams', function (companyService, $routeParams) {
  	var ctrl = this;
  	ctrl.companyId = $routeParams.id;
    companyService.getCompany(ctrl.companyId)
  		.then(function(response) {
  			ctrl.companyName = response.data.company_name;
  			ctrl.location = response.data.location;
  			ctrl.foundedYear = response.data.founded_year;
  			ctrl.opening = response.data.opening;
  			ctrl.numberOpenings = response.data.no_openings;
  			ctrl.companyUrl = response.data.company_url;
  			ctrl.careerUrl = response.data.career_url;
  			ctrl.jobList = response.data.jobs;
  		}, function(error) {
  			console.log(error);
  		});
  }]);
