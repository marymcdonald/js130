"use strict";

// The diamond exercise takes as its input a letter, and outputs it in a
// diamond shape. Given a letter, it prints a diamond starting with 'A', with
// the supplied letter at the widest point.

// The first row contains one 'A'.
// The last row contains one 'A'.
// All rows, except the first and last, have exactly two identical letters.
// The diamond is horizontally symmetric.
// The diamond is vertically symmetric.
// The diamond has a square shape (width equals height).
// The letters form a diamond shape.
// The top half has the letters in ascending order.
// The bottom half has the letters in descending order.
// The four corners (containing the spaces) are triangles.

class Diamond {
  static ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  static makeDiamond(givenLetter) {
    if (givenLetter === 'A') {
      return "A\n";
    }
    let upperHalf = Diamond.makeUpperHalf(givenLetter);
    let bottomHalf = [];

    for (let index = upperHalf.length - 2; index >= 0; index -= 1) {
      bottomHalf.push(upperHalf[index]);
    }

    let fullDiamond = [...upperHalf, ...bottomHalf];

    return fullDiamond.join('');
  }
  static makeUpperHalf(givenLetter) {
    let letterSet = Diamond.ALPHABET.slice(0, Diamond.ALPHABET.indexOf(givenLetter) + 1);
    let letterSetLength = letterSet.length - 1;

    let diamondLines = [];
    let lineA = ' '.repeat(letterSetLength) + 'A' + ' '.repeat(letterSetLength) + '\n';
    diamondLines.push(lineA);

    //all other lines
    let line = '';
    for (let index = 1; index <= letterSetLength; index += 1) {
      let currentLetter = letterSet[index];
      let middle = index + (index - 1);

      line = ' '.repeat(letterSetLength - index) + currentLetter + ' '.repeat(middle) + currentLetter + ' '.repeat(letterSetLength - index) + '\n';
      diamondLines.push(line);
    }
    return diamondLines;
  }

}

module.exports = Diamond;

let diamant = Diamond.makeDiamond('M');
console.log(diamant)

//create a collection that holds alphabet
//make a slice for the set
//length of diamond is (length of set * 2) - 1

//  A 
// B B
//  A

//BAB - 3
//CBABC - 5
//DCBABCD - 7
//EDCBABCDE - 9 


//' '.repeat(1) + 'A' + ' '.repeat(1) + \n
//' '.repeat(0) + 'B' + ' '.repeat(1) + 'B' + ' '.repeat(0) + \n

// 0, 1, 2
//[A, B, C]
//' '.repeat(2) + 'A' + ' '.repeat(2) + \n
//' '.repeat(1) + 'B' + ' '.repeat(1) + 'B' + ' '.repeat(1) + \n
//' '.repeat(0) + 'C' + ' '.repeat(3) + 'C' + ' '.repeat(0) + \n

// 0, 1, 2, 3
//[A, B, C, D]
//' '.repeat(3) + 'A' + ' '.repeat(3) + \n
//' '.repeat(2) + 'B' + ' '.repeat(1) + 'B' + ' '.repeat(2) + \n
//' '.repeat(1) + 'C' + ' '.repeat(3) + 'C' + ' '.repeat(1) + \n
//' '.repeat(0) + 'D' + ' '.repeat(5) + 'D' + ' '.repeat(0) + \n

//' '.repeat(letterSet.length - 1)
//' '.repeat(letterSet.length - 2) + 'B' + ' '.repeat(letterSet.indexOf('B)) + 'B'
//' '.repeat(letterSet.length - 3) + 'C'
//' '.repeat(letterSet.length - 4) + 'D'