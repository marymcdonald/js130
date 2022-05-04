"use strict";
// Write a program that, given a word, computes the Scrabble score for that
// word.

// Letter	Value
// A, E, I, O, U, L, N, R, S, T	1
// D, G	2
// B, C, M, P	3
// F, H, V, W, Y	4
// K	5
// J, X	8
// Q, Z	10

class Scrabble {
  static LETTER_VALUES = {
    'a': 1,
    'b': 3,
    'c': 3,
    'd': 2,
    'e': 1,
    'f': 4,
    'g': 2,
    'h': 4,
    'i': 1,
    'j': 8,
    'k': 5,
    'l': 1,
    'm': 3,
    'n': 1,
    'o': 1,
    'p': 3,
    'q': 10,
    'r': 1,
    's': 1,
    't': 1,
    'u': 1,
    'v': 4,
    'w': 4,
    'x': 8,
    'y': 4,
    'z': 10,
  };

  static score(word) {
    let scrabbleWord = new Scrabble(word);
    return scrabbleWord.score();
  }
  constructor(word) {
    this.word = word;
  }
  score() {
    if (!this.word || !(this.word.match(/[a-z]/i))) {
      return 0;
    }
    let scores = [].map.call(this.word.toLowerCase(), letter => Scrabble.LETTER_VALUES[letter]);
    return scores.reduce((a,b) => a + b);
  }
}
// let test = new Scrabble('OXYPHENBUTAZONE');
// console.log(test.score());
// console.log(Scrabble.score('a'));

module.exports = Scrabble;

//map each letter to score
//sum up all scores