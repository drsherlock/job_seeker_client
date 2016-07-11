'use strict';

describe('Service: getCompany', function () {

  // load the service's module
  beforeEach(module('jobSeekerApp'));

  // instantiate service
  var getCompany;
  beforeEach(inject(function (_getCompany_) {
    getCompany = _getCompany_;
  }));

  it('should do something', function () {
    expect(!!getCompany).toBe(true);
  });

});
