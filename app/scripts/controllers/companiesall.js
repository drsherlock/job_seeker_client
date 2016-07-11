'use strict';

/**
 * @ngdoc function
 * @name jobSeekerApp.controller:CompaniesallCtrl
 * @description
 * # CompaniesallCtrl
 * Controller of the jobSeekerApp
 */
angular.module('jobSeekerApp')
  .controller('CompaniesallCtrl', ['getAllCompanies', function (companiesService) {
  	var ctrl = this;
  	ctrl.pageNumber = 1;
  	ctrl.getNext = function() {
  		ctrl.pageNumber = ctrl.pageNumber + 1;
  		companiesService.getCompanies(ctrl.pageNumber)
  		.then(function(response){
  			ctrl.companiesList	= ctrl.companiesList.concat(response.data.results);	
  		}, function(error) {
  			console.log("fuck u "+ error);
  		});
  	};
  	companiesService.getCompanies(ctrl.pageNumber)
  		.then(function(response){
  			ctrl.companiesList = response.data.results;
  		}, function(error) {
  			console.log("fuck u "+ error);
  		});
  }]);
