"use strict";
// Implement octal to decimal conversion. Given an octal input string, your
// program should produce a decimal output. Treat invalid input as octal 0.

// Note: Implement the conversion yourself. Don't use any built-in or library
// methods that perform the necessary conversions for you. In this exercise,
// the code necessary to perform the conversion is what we're looking for.

class Octal {
  constructor(number) {
    this.number = number;
  }
  toDecimal() {
    let numArray = this.number.split('');

    if(numArray.includes('8') || numArray.includes('9')) {
      return 0;
    } else if (this.number.match(/[a-z]/i)) {
      return 0;
    }

    numArray.reverse();

    let mapped = numArray.map((digit, index) => digit * (8 ** index));
    let decimalSum = mapped.reduce((a,b) => a + b);
    return decimalSum;
  }
}

module.exports = Octal;