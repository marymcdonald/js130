// Write a program that, given a natural number and a set of one or more other
// numbers, can find the sum of all the multiples of the numbers in the set
// that are less than the first number. If the set of numbers is not given, use
// a default set of 3 and 5.

// For instance, if we list all the natural numbers up to, but not including,
// 20 that are multiples of either 3 or 5, we get 3, 5, 6, 9, 10, 12, 15, and
// 18. The sum of these multiples is 78.

class SumOfMultiples {
  constructor(...set) {
    this.numbers = [...set];

    if (this.numbers.length === 0) {
      this.numbers.push(3, 5);
    }
  }

  static to(limit) {
    let sumMult = new SumOfMultiples();
    return sumMult.to(limit);
  }
  to(limit) {
    let multiples = [];
    this.numbers.forEach(number => {
      if (limit > number) {
        multiples.push(number);
      }
    });

    if (multiples.length === 0) {
      return 0;
    }

    for (let index = multiples[0]; index < limit; index += 1) {
      multiples.forEach(num => {
        if (index % num === 0) {
          if (multiples.indexOf(index) === -1) {
            multiples.push(index);
          }
        }
      });
    }
    return multiples.reduce((a,b) => a + b);
  }
}

// let obj = new SumOfMultiples();
// console.log(obj.to(10));

// SumOfMultiples.to(10);

module.exports = SumOfMultiples;

/* nice way to get a multiple:

  anyMultiple(num) {
    return this.multiples.some(multiple => {
      return num % multiple === 0;
    });
  }
*/