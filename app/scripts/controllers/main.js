'use strict';

/**
 * @ngdoc function
 * @name jobSeekerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jobSeekerApp
 */
angular.module('jobSeekerApp')
  .controller('MainCtrl', ['getAllCompanies', 'getAllJobs', function (companiesService, jobsService) {
	var ctrl = this;
	companiesService.getCompanies(1)
  		.then(function(response){
  			ctrl.companiesCount = response.data.count;
  		}, function(error) {
  			console.log("fuck u "+ error);
  		});
  	jobsService.getJobs(1)
  		.then(function(response){
  			ctrl.jobsCount = response.data.count;
  		}, function(error) {
  			console.log("fuck u "+ error);
  		});    
  }]);
