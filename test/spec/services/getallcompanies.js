'use strict';

describe('Service: getAllCompanies', function () {

  // load the service's module
  beforeEach(module('jobSeekerApp'));

  // instantiate service
  var getAllCompanies;
  beforeEach(inject(function (_getAllCompanies_) {
    getAllCompanies = _getAllCompanies_;
  }));

  it('should do something', function () {
    expect(!!getAllCompanies).toBe(true);
  });

});
