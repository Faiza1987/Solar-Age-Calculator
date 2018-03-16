export class SpaceAge {
  constructor(dob, region) {
    this.dob = dob;
    this.region = region;
  }

  //Age on Earth in years
  ageEarthYears() {
    const birthdate = new Date(this.dob);
    let today = new Date();
    let calcAge = today - birthdate; 
    let ageInYears = Math.floor(calcAge/(365.25 * 24 * 60 * 60 * 1000 )); // year * day * minutes per hour  * seconds per minute * 1000 millisecs per sec  // I am 30 years old

    return ageInYears;
  }

  //Age on Earth in seconds
  ageEarthSeconds(){
    let ageInSecs = parseInt(this.ageEarthYears() * 365 * 24 * 60 * 60); // year * day * minutes per hour  * seconds per minute 
    return ageInSecs; // I am many many seconds old
  }

  //Age on Mercury in years
  ageMercury() {
    let mercurianAge = parseInt(this.ageEarthYears()/0.24); //I am 125 years old
    return mercurianAge;
  }

  //Age on Venus in years
  ageVenus() {
    let venusianAge = parseInt(this.ageEarthYears()/0.62); //I am 48 years old
    return venusianAge;
  }

  //Age on Mars in years
  ageMars() {
    let martianAge = parseInt(this.ageEarthYears()/1.88); //I am 15 years old
    return martianAge;
  }

  //Age on Jupiter in years
  ageJupiter() {
    let jovianAge = parseInt(this.ageEarthYears()/11.86); // I am 2.5 years old
    return jovianAge;
  }

//Life Expectancy on other planets
}
