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
    ctrl.isSearching = false;
    ctrl.searchTerm = "";

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

    ctrl.deleteTerm = function (event) {
      if(event.keyCode === 8) {
        ctrl.searchTermLen = ctrl.searchTermLen - 1;
      }
      // If search box is empty
      ctrl.isSearching = ctrl.searchTermLen !== 0;
    };

    ctrl.search = function() {
      ctrl.searchTermLen = ctrl.searchTerm.length;
      // If search box is empty, show normal results
      if(ctrl.searchTerm === "" && ctrl.isSearching === false) {
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
      }
      // If search box is not empty, search the input
      else {
        ctrl.isSearching = true;
        companyService.searchCompanyJob(ctrl.companyId, ctrl.searchTerm)
          .then(function(response) {
            console.log(response.data);
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
      }
    };
  }]);
