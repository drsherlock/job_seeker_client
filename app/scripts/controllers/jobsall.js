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
  	var ctrl = this;
  	ctrl.pageNumber = 1;
  	ctrl.getNext = function() {
  		ctrl.pageNumber = ctrl.pageNumber + 1;
  		jobsService.getJobs(ctrl.pageNumber)
  		.then(function(response){
  			ctrl.jobsList = ctrl.jobsList.concat(response.data.results);	
  		}, function(error) {
  			console.log("fuck u "+ error);
  		});
  	};
  	jobsService.getJobs(ctrl.pageNumber)
  		.then(function(response) {
  			ctrl.jobsList = response.data.results;
  		}, function(error) {
  			console.log("fuck u " + error);
  		});
  }]);
