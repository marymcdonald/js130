"use strict";
// Write a program that takes a word and a list of possible anagrams and
// selects the correct sublist that contains the anagrams of the word.

// For example, given the word "listen" and a list of candidates like
// "enlists", "google", "inlets", and "banana", the program should return a
// list containing "inlets". Please read the test suite for the exact rules of
// anagrams.

class Anagram {
  constructor(word) {
    this.word = word;
  }
  match(list) {
    let equalLength = [];
    let regex = new RegExp(this.word, 'i');
    list.forEach(word => {
      if ((word.length === this.word.length) && !(word.match(regex))) {
        equalLength.push(word);
      }
    });

    if (equalLength.length === 0) {
      return [];
    }
    
    let wordObj = this.wordToObject(this.word);
    let result = [];
    equalLength.forEach(word => {
      let counter = 0;
      for (let key in wordObj) {
        if (wordObj[key] !== this.wordToObject(word)[key]) {
          counter = 1;
          break;
        }
      }
      if (counter === 0) {
        result.push(word);
      }
    });

    return result;
  }
  wordToObject(word) {
    let wordObj = {};
    [].forEach.call(word.toLowerCase(), letter => {
      if (wordObj[letter] === undefined) {
        wordObj[letter] = 1;
      } else {
        wordObj[letter] += 1;
      }
    });
    return wordObj
  }
}



// let detector = new Anagram('ant');
// let anagrams = detector.match(['ant', 'tan', 'stand', 'at']);
// console.log(anagrams);
// console.log(detector.wordToObject());


//compare length of words - if not equal, then not anagrams
//for those that are equal
//  go through letter by letter to match? regex?

//regex to match exact word
//if (word.match(this.word))

//break word into letters
//assign letters in object
//'diaper'
//{'d': 1, 'i': 1, etc...}

module.exports = Anagram;