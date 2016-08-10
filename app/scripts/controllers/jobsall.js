'use strict';

/**
 * @ngdoc function
 * @name jobSeekerApp.controller:JobsallCtrl
 * @description
 * # JobsallCtrl
 * Controller of the jobSeekerApp
 */
angular.module('jobSeekerApp')
  .controller('JobsallCtrl', ['getAllJobs', 'searchJobs', function (jobsService, jobsSearchService) {
  	var ctrl = this;
    var count;
    ctrl.pageNumber = 1;
    ctrl.searchPageNumber = 1;
    ctrl.isSearching = false;
    ctrl.searchTerm = "";

    // Initial page load
    jobsService.getJobs(ctrl.pageNumber)
      .then(function(response) {
        ctrl.jobsList = response.data.results;
        count = response.data.count;
        checkCount();
      }, function(error) {
        console.log("fuck u " + error);
      });

    // User clicks next button
  	ctrl.getNext = function() {
      // If search is not being used
      if(ctrl.searchTerm === "" && ctrl.isSearching === false) {
        ctrl.pageNumber = ctrl.pageNumber + 1;
        jobsService.getJobs(ctrl.pageNumber)
          .then(function(response) {
            ctrl.jobsList = ctrl.jobsList.concat(response.data.results);
            checkCount(); 
          }, function(error) {
            console.log("fuck u " + error);
          });
      }
      // If search is being used
      else {
        ctrl.searchPageNumber = ctrl.searchPageNumber + 1;
        jobsSearchService.searchJob(ctrl.searchPageNumber, ctrl.searchTerm)
          .then(function(response) {
            ctrl.jobsList = ctrl.jobsList.concat(response.data.results);
            checkCount();
          }, function(error) {
            console.log("fuck u " + error);
          });
      }	
  	};

    // User backspaces to delete search term
    ctrl.deleteTerm = function (event) {
      if (event.keyCode === 8) {
        ctrl.searchTermLen = ctrl.searchTermLen - 1;
      }
      // If search box is empty
      if(ctrl.searchTermLen === 0) {
        ctrl.isSearching = false;
      }
    };

    // User clicks search button
    ctrl.search = function() {
      ctrl.searchTermLen = ctrl.searchTerm.length;
      // If search box is empty, show normal results
      if(ctrl.searchTerm === "" && ctrl.isSearching === false) {
        ctrl.pageNumber = 1;
        jobsService.getJobs(ctrl.pageNumber)
          .then(function(response) {
            ctrl.jobsList = response.data.results;
            count = response.data.count;
            checkCount();
          }, function(error) {
            console.log("fuck u " + error);
          });
      }
      // If search box is not empty, search the input
      else {
        ctrl.isSearching = true;
        ctrl.searchPageNumber = 1;
        jobsSearchService.searchJob(ctrl.searchPageNumber, ctrl.searchTerm)
          .then(function(response) {
            ctrl.jobsList = response.data.results;
            count = response.data.count;
            checkCount();
          }, function(error) {
            console.log("fuck u " + error);
          });
      }
    };

    // Function to hide and show next button
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
