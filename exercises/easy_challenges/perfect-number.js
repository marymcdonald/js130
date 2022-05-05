"use strict";

class PerfectNumber {
  static classify(number) {
    if (number < 0) {
      throw new Error();
    } else {
      let perfectNum = new PerfectNumber(number);
      return perfectNum.classify();
    }
  }
  constructor(number) {
    this.number = number;
  }
  classify() {
    let sumOfDivisors = this.factors().reduce((a,b) => a + b);
    if (sumOfDivisors < this.number) {
      return 'deficient';
    } else if (sumOfDivisors === this.number) {
      return 'perfect';
    } else {
      return 'abundant';
    }
  }
  factors() {
    let divisors = [1];
    let counter = 2;
    while (true) {
      if (this.number % counter === 0) {
        divisors.push(counter);
      }
      counter += 1;
      if (counter === this.number) {
        break;
      }
    }
    return divisors;
  }
}

// let pnum = new PerfectNumber(9);
// console.log(pnum.factors());

module.exports = PerfectNumber;

/* their answer doesn't use a constructor and only static methods
I didn't know you could make a class without a constructor

class PerfectNumber {
  static classify(number) {
    if (number < 1) {
      throw new Error("Number must be greater than or equal to 1.");
    }

    let sum = this.sumOfFactors(number);

    if (sum === number) {
      return 'perfect';
    } else if (sum > number) {
      return 'abundant';
    } else {
      return 'deficient';
    }
  }

  static sumOfFactors(number) {
    let sum = 0;

    for (let divisor = 1; divisor < number; divisor++) {
      if (number % divisor === 0) {
        sum += divisor;
      }
    }

    return sum;
  }
}

module.exports = PerfectNumber;
*/