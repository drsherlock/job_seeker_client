'use strict';

describe('Controller: CompaniesallCtrl', function () {

  // load the controller's module
  beforeEach(module('jobSeekerApp'));

  var CompaniesallCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CompaniesallCtrl = $controller('CompaniesallCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CompaniesallCtrl.awesomeThings.length).toBe(3);
  });
});
