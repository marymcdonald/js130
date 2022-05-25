// Create a clock that is independent of date.

// You should be able to add minutes to and subtract minutes from the time
// represented by a given clock object. Two clock objects that represent the
// same time should be equal to each other.

// You may not use any built-in date or time functionality; just use arithmetic
// operations.

//has methods at(), toString(), add(), subtract(), isEqual()
//at – static method. create Clock here
//add:
//add minute + numberOfMins
//calculate sum / 60 : add factor to hour, minute becomes remainder

class Clock{
  constructor(hour, minute) {
    this.hour = hour;

    if (!minute) {
      this.minute = 0;
    } else {
      this.minute = minute;
    }
  }

  static at(hour, minute) {
    return new Clock(hour, minute);
  }

  toString() {
    let hour = '';
    let minute = '';

    if (this.hour < 10) {
      hour = '0' + String(this.hour);
    } else {
      hour = String(this.hour);
    }
    
    if (this.minute) {
      if (this.minute < 10) {
        minute = '0' + String(this.minute);
      }
      else {
        minute = String(this.minute);
      }
    } else {
      minute = '00';
    }
    let strTime = hour + ':' + minute;
    return strTime;
  }

  add(numberOfMins) {

    let sum = this.minute + numberOfMins;
    let factorHours = Math.floor(sum / 60);
    let remainderMins = sum % 60;

    this.hour = this.hour + factorHours;
    
    if (this.hour > 23) {
      this.hour = this.hour % 24;
    }

    this.minute = remainderMins;
    return this;
  }

  subtract(numberOfMins) {
    let factor = Math.floor(numberOfMins / 60);
    let difference = numberOfMins % 60;


    this.hour = this.hour - factor;
    if (this.hour < 0) {
      this.hour = 24 + (this.hour % 24);
    }


    if ((this.minute === 0) && difference !== 0) {
      if (this.hour === 0) {
        this.hour = 23;
      } else {
        this.hour -= 1;
      }
    }

    this.minute -= difference;

    if (this.minute < 0) {
      this.minute += 60;
    } 

    return this;
  }

  isEqual(clock2) {
    if (this.toString() === clock2.toString()) {
      return true;
    }
    return false;
  }
  
}

// let clock = Clock.at(10).add(2);
// console.log(clock);
// clock.add(70);
// console.log(clock.toString());

// let clock2 = Clock.at(10,30).subtract(60);
// console.log(clock2.toString());
// let clock1 = Clock.at(15, 37);
// let clock2 = Clock.at(15, 37);
// console.log(clock1.isEqual(clock2));



module.exports = Clock;