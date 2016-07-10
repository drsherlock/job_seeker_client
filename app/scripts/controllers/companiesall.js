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
  	var pageNumber = 1;
  	var ctrl = this;
  	companiesService.getCompanies(pageNumber)
  		.then(function(response){
  			ctrl.companiesNumber = response.data.count;
  			ctrl.companiesList = response.data.results;
  		}, function(error) {
  			console.log("fuck u "+ error);
  		});
  }]);
