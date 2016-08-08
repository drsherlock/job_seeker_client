'use strict';

/**
 * @ngdoc function
 * @name jobSeekerApp.controller:CompaniesallCtrl
 * @description
 * # CompaniesallCtrl
 * Controller of the jobSeekerApp
 */
angular.module('jobSeekerApp')
  .controller('CompaniesallCtrl', ['getAllCompanies', 'searchCompanies', function (companiesService, companiesSearchService) {
  	var ctrl = this;
    var count;
    ctrl.pageNumber = 1;
    ctrl.searchPageNumber = 1;
  	ctrl.getNext = function() {
  		ctrl.pageNumber = ctrl.pageNumber + 1;
  		companiesService.getCompanies(ctrl.pageNumber)
  		.then(function(response){
  			ctrl.companiesList	= ctrl.companiesList.concat(response.data.results);	
        checkCount();
  		}, function(error) {
  			console.log("fuck u "+ error);
  		});
  	};

  	companiesService.getCompanies(ctrl.pageNumber)
  		.then(function(response){
  			ctrl.companiesList = response.data.results;
        count = response.data.count;
        checkCount();
  		}, function(error) {
  			console.log("fuck u "+ error);
  		});

    ctrl.search = function() {
      ctrl.pageNumber = 1;
      if(ctrl.searchTerm === "") {
        companiesService.getCompanies(ctrl.pageNumber)
          .then(function(response){
            ctrl.companiesList = response.data.results;
            count = response.data.count;
            checkCount();
          }, function(error) {
            console.log("fuck u "+ error);
          });
      }
      else {
        companiesSearchService.searchCompany(ctrl.searchPageNumber, ctrl.searchTerm)
          .then(function(response){
            ctrl.companiesList = response.data.results;
            console.log(response.data.results);
            count = response.data.count;
            checkCount();
          }, function(error) {
            console.log("fuck u " + error);
          });
      }
    };

    function checkCount() {
      console.log(count);
      if(count < 10) {
        $(".nextButton").hide();
      }
      else {
        $(".nextButton").show();
      }
      count = count - 10;
    }
  }]);
