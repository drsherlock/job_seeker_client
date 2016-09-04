'use strict';

describe('Directive: searchBoxDirective', function () {

  // load the directive's module
  beforeEach(module('jobSeekerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<search-box-directive></search-box-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the searchBoxDirective directive');
  }));
});
