'use strict';

describe('Controller: JobsallCtrl', function () {

  // load the controller's module
  beforeEach(module('jobSeekerApp'));

  var JobsallCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JobsallCtrl = $controller('JobsallCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(JobsallCtrl.awesomeThings.length).toBe(3);
  });
});
