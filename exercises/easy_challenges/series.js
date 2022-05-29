/*
Write a program that will take a string of digits and return all the possible consecutive number series of a specified length in that string.

For example, the string "01234" has the following 3-digit series:

012
123
234
Likewise, here are the 4-digit series:

0123
1234
Finally, if you ask for a 6-digit series from a 5-digit string, you should throw an error.
*/

//create a class Series
//argument: string of digits, 1 argument only

//methods:
//slices – argument is a digit, length of 'slice'
//returns array of arrays
//if argument is longer than string size, throws error

//building a window function
//figure out first and last indices
//slices will come from those

//sample slice: – size 3, string '0123456'
//first indices: [0, 3] – 012
//second indices: [1, 4] - 123
//...
//last indices: [4, 7] - 456
//stop when stop index === string.length

class Series {
  constructor(digitStr) {
    this.str = digitStr.split('').map(num => Number(num));
  }
  slices(num) {
    if (num > this.str.length) {
      throw new Error;
    }

    let slicedArr = [];
    let tempArr = [];

    for(let index = 0; index <= (this.str.length - num); index += 1) {
      tempArr = this.str.slice(index, index + num);
      slicedArr.push(tempArr);
    }
    return slicedArr;
  }
}

// let series = new Series('01234');
// console.log(series.slices(1));

module.exports = Series;