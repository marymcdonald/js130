"use strict";
//Roman numerals
// Write some code that converts modern decimal numbers into their Roman number
// equivalents.


// There is no need to be able to convert numbers larger than about 3000. (The
// Romans themselves didn't tend to go any higher)

// Wikipedia says: Modern Roman numerals ... are written by expressing each
// digit separately starting with the left most digit and skipping any digit
// with a value of zero.

class RomanNumeral {
  static ROMAN_NUMBERS = [1000, 500, 100, 50, 10, 5, 1];
  static ROMAN_LETTERS = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
  static EXCEPTIONS_NUMBERS = [900, 90, 9, 400, 40, 4];
  static EXCEPTIONS_LETTERS = ['CM', 'XC', 'IX', 'CD', 'XL', 'IV'];
  constructor(digits) {
    this.digits = digits;
  }
  toRoman() {
    let reversed = String(this.digits).split('').reverse();
    let columns = reversed.map((digit, index) => Number(digit) * (10 ** index));
    let result = [];
    columns.forEach(number => {
      if (number !== 0) {
        result.push(this.digitConversion(number));
      }
    });
    return result.reverse().join('');
  }
  digitConversion(number) {
    let counter = 0;
    if (RomanNumeral.EXCEPTIONS_NUMBERS.includes(number)) {
      let index = RomanNumeral.EXCEPTIONS_NUMBERS.indexOf(number);
      return RomanNumeral.EXCEPTIONS_LETTERS[index];
    }
    
    while (true) {
      if (number >= RomanNumeral.ROMAN_NUMBERS[counter]) {
        break;
      }
      counter += 1;
    }

    if (['V', 'L', 'D'].includes(RomanNumeral.ROMAN_LETTERS[counter])) {
      number -= RomanNumeral.ROMAN_NUMBERS[counter];
      if (number === 0) {
        return RomanNumeral.ROMAN_LETTERS[counter]
      }
      return RomanNumeral.ROMAN_LETTERS[counter] + this.digitConversion(number);
    } else if ((number < 10) || (number % 10 === 0)) {
      let factor = number / RomanNumeral.ROMAN_NUMBERS[counter];
      return RomanNumeral.ROMAN_LETTERS[counter].repeat(factor);
    }
  }

}

// let num = new RomanNumeral(50);
// console.log(num.toRoman());

module.exports = RomanNumeral;