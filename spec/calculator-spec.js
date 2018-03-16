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

  it('should test whether life expectancy on Mercury is 326', function() {
    var calculate = new SpaceAge("1987-04-08", "Yes", "Female");
    expect(calculate.lifeExpectancyMercury()).toEqual(326);
  });

  it('should test whether life expectancy on Mercury is 309', function() {
    var calculate = new SpaceAge("1987-04-08", "Yes", "Male");
    expect(calculate.lifeExpectancyMercury()).toEqual(309);
  });

  it('should test whether life expectancy on Mercury is 344', function() {
    var calculate = new SpaceAge("1987-04-08", "No", "Male");
    expect(calculate.lifeExpectancyMercury()).toEqual(344);
  });

  it('should test whether life expectancy on Venus is 126', function() {
    var calculate = new SpaceAge("1987-04-08", "Yes", "Female");
    expect(calculate.lifeExpectancyVenus()).toEqual(126);
  });

  it('should test whether life expectancy on Venus is 119', function() {
    var calculate = new SpaceAge("1987-04-08", "Yes", "Male");
    expect(calculate.lifeExpectancyVenus()).toEqual(119);
  });

  it('should test whether life expectancy on Venus is 133', function() {
    var calculate = new SpaceAge("1987-04-08", "No", "Male");
    expect(calculate.lifeExpectancyVenus()).toEqual(133);
  });

  it('should test whether life expectancy on Mars is 41', function() {
    var calculate = new SpaceAge("1987-04-08", "Yes", "Female");
    expect(calculate.lifeExpectancyMars()).toEqual(41);
  });

  it('should test whether life expectancy on Mars is 39', function() {
    var calculate = new SpaceAge("1987-04-08", "Yes", "Male");
    expect(calculate.lifeExpectancyMars()).toEqual(39);
  });

  it('should test whether life expectancy on Jupiter is 6.6', function() {
    var calculate = new SpaceAge("1987-04-08", "No", "Male");
    expect(calculate.lifeExpectancyJupiter()).toEqual(6);
  });

  it('should test whether life expectancy on Jupiter is 6.2', function() {
    var calculate = new SpaceAge("1987-04-08", "Yes", "Male");
    expect(calculate.lifeExpectancyJupiter()).toEqual(6);
  });

  it('should test whether life expectancy on Jupiter is 6.9', function() {
    var calculate = new SpaceAge("1987-04-08", "No", "Male");
    expect(calculate.lifeExpectancyJupiter()).toEqual(6);
  });

  it('should check if the user is already over lifespan expectation', function() {
    var calculate = new SpaceAge("1987-04-08", "No", "Male");
    expect(calculate.immortal(468,250)).toEqual("Gee Golly Whiz Batman! Is he a vampire?!");
  });
});
