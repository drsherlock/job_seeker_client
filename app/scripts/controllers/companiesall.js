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
    var count;
    ctrl.pageNumber = 1;
    ctrl.searchPageNumber = 1;
    ctrl.isSearching = false;
    ctrl.searchTerm = "";

    // Initial page load
    companiesService.getCompanies(ctrl.pageNumber)
      .then(function(response) {
        ctrl.companiesList = response.data.results;
        count = response.data.count;
        checkCount();
      }, function(error) {
        console.log(error);
      });

    // User clicks next button
  	ctrl.getNext = function() {
      // If search is not being used
      if(ctrl.searchTerm === "" && ctrl.isSearching === false) {
        ctrl.pageNumber = ctrl.pageNumber + 1;
        companiesService.getCompanies(ctrl.pageNumber)
          .then(function(response) {
            ctrl.companiesList = ctrl.companiesList.concat(response.data.results);
            checkCount(); 
          }, function(error) {
            console.log(error);
          });
      }
      // If search is being used
      else {
        ctrl.searchPageNumber = ctrl.searchPageNumber + 1;
        companiesService.searchCompany(ctrl.searchPageNumber, ctrl.searchTerm)
          .then(function(response) {
            ctrl.companiesList = ctrl.companiesList.concat(response.data.results);
            checkCount();
          }, function(error) {
            console.log(error);
          });
      } 
    };

    // User backspaces to delete search term
    ctrl.deleteTerm = function (event) {
      if(event.keyCode === 8) {
        ctrl.searchTermLen = ctrl.searchTermLen - 1;
      }
      // If search box is empty
      ctrl.isSearching = ctrl.searchTermLen !== 0;
    };

    // User clicks search button
    ctrl.search = function() {
      ctrl.searchTermLen = ctrl.searchTerm.length;
      // If search box is empty, show normal results
      if(ctrl.searchTerm === "" && ctrl.isSearching === false) {
        ctrl.pageNumber = 1;
        companiesService.getCompanies(ctrl.pageNumber)
          .then(function(response) {
            ctrl.companiesList = response.data.results;
            count = response.data.count;
            checkCount();
          }, function(error) {
            console.log(error);
          });
      }
      // If search box is not empty, search the input
      else {
        ctrl.isSearching = true;
        ctrl.searchPageNumber = 1;
        companiesService.searchCompany(ctrl.searchPageNumber, ctrl.searchTerm)
          .then(function(response) {
            ctrl.companiesList = response.data.results;
            count = response.data.count;
            checkCount();
          }, function(error) {
            console.log(error);
          });
      }
    };

    // Function to hide and show next button
    function checkCount() {
      console.log(count);
      $(".nextButton").toggle(count > 12);
      count = count - 12;
    }
  }]);
