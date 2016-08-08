'use strict';

describe('Service: searchJobs', function () {

  // load the service's module
  beforeEach(module('jobSeekerApp'));

  // instantiate service
  var searchJobs;
  beforeEach(inject(function (_searchJobs_) {
    searchJobs = _searchJobs_;
  }));

  it('should do something', function () {
    expect(!!searchJobs).toBe(true);
  });

});
