'use strict';

/**
 * @ngdoc overview
 * @name jobSeekerApp
 * @description
 * # jobSeekerApp
 *
 * Main module of the application.
 */
angular
  .module('jobSeekerApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/companies', {
        templateUrl: 'views/companiesall.html',
        controller: 'CompaniesallCtrl',
        controllerAs: 'companies'
      })
      .when('/jobs', {
        templateUrl: 'views/jobsall.html',
        controller: 'JobsallCtrl',
        controllerAs: 'jobs'
      })
      .when('/companies/:id', {
        templateUrl: 'views/company.html',
        controller: 'CompanyCtrl',
        controllerAs: 'company'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);
      $locationProvider.hashPrefix = '!';
  });
