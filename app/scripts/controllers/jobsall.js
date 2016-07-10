'use strict';

/**
 * @ngdoc function
 * @name jobSeekerApp.controller:JobsallCtrl
 * @description
 * # JobsallCtrl
 * Controller of the jobSeekerApp
 */
angular.module('jobSeekerApp')
  .controller('JobsallCtrl', ['getAllJobs', function (jobsService) {
    var pageNumber = 1;
  	var ctrl = this;
  	jobsService.getJobs(pageNumber)
  		.then(function(response) {
  			ctrl.jobsNumber = response.data.count;
  			ctrl.jobsList = response.data.results;
  		}, function(error) {
  			console.log("fuck u " + error);
  		});
  }]);
