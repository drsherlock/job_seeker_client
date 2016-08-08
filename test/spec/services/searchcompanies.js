'use strict';

describe('Service: searchCompanies', function () {

  // load the service's module
  beforeEach(module('jobSeekerApp'));

  // instantiate service
  var searchCompanies;
  beforeEach(inject(function (_searchCompanies_) {
    searchCompanies = _searchCompanies_;
  }));

  it('should do something', function () {
    expect(!!searchCompanies).toBe(true);
  });

});
