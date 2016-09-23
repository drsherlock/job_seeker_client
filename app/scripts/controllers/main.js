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
				$({countNum: $('#companiesCounter').text()}).animate({countNum: ctrl.companiesCount}, {
					duration: 3000,
					easing:'linear',
					step: function() {
						$('#companiesCounter').text(Math.floor(this.countNum));
					},
					complete: function() {
						$('#companiesCounter').text(this.countNum);
					}
				});
			}, function(error) {
				console.log(error);
			});
		jobsService.getJobs(1)
			.then(function(response){
				ctrl.jobsCount = response.data.count;
				$({countNum: $('#jobsCounter').text()}).animate({countNum: ctrl.jobsCount}, {
					duration: 3000,
					easing:'linear',
					step: function() {
						$('#jobsCounter').text(Math.floor(this.countNum));
					},
					complete: function() {
						$('#jobsCounter').text(this.countNum);
					}
				});
			}, function(error) {
				console.log(error);
			});    

	}]);
