import { SpaceAge } from './../src/calculator.js';

describe('SpaceAge', function(){
  it('should test whether age in years on Earth is true', function() {
    var calculateAge = new SpaceAge("1987-04-08");
    expect(calculateAge.ageEarthYears()).toEqual(30);
  });

  it('should test whether age in seconds on Earth is true', function() {
    var calculateAge = new SpaceAge("1987-04-08");
    expect(calculateAge.ageEarthSeconds()).toEqual(946080000);
  });

  it('should test whether age in years on Mercury is true', function() {
    var calculate = new SpaceAge("1987-04-08");
    expect(calculate.ageMercury()).toEqual(125);
  });

  it('should test whether age in years on Venus is true', function() {
    var calculate = new SpaceAge("1987-04-08");
    expect(calculate.ageVenus()).toEqual(48);
  });

  it('should test whether age in years on Mars is true', function() {
    var calculate = new SpaceAge("1987-04-08");
    expect(calculate.ageMars()).toEqual(15);
  });

  it('should test whether age in years on Jupiter is true', function() {
    var calculate = new SpaceAge("1987-04-08");
    expect(calculate.ageJupiter()).toEqual(2);
  });
});
