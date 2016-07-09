'use strict';

describe('Service: getAllJobs', function () {

  // load the service's module
  beforeEach(module('jobSeekerApp'));

  // instantiate service
  var getAllJobs;
  beforeEach(inject(function (_getAllJobs_) {
    getAllJobs = _getAllJobs_;
  }));

  it('should do something', function () {
    expect(!!getAllJobs).toBe(true);
  });

});
