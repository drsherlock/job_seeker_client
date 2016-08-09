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

  	ctrl.getNext = function() {
      if(ctrl.searchTerm === "" && ctrl.searchTermLen === 0) {
        ctrl.pageNumber = ctrl.pageNumber + 1;
        jobsService.getJobs(ctrl.pageNumber)
          .then(function(response) {
            ctrl.jobsList = ctrl.jobsList.concat(response.data.results);
            checkCount(); 
          }, function(error) {
            console.log("fuck u " + error);
          });
      }
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

  	jobsService.getJobs(ctrl.pageNumber)
  		.then(function(response) {
  			ctrl.jobsList = response.data.results;
        count = response.data.count;
        checkCount();
  		}, function(error) {
  			console.log("fuck u " + error);
  		});

    ctrl.deleteTerm = function (event) {
      if (event.keyCode === 8) {
        console.log("Yesss");
        ctrl.searchTermLen = ctrl.searchTermLen - 1;
      }
    };

    ctrl.search = function() {
      ctrl.searchTermLen = ctrl.searchTerm.length;
      if(ctrl.searchTerm === "" && ctrl.searchTermLen === 0) {
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
      else {
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
