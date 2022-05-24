"use strict";
Math.seedrandom = require('seedrandom');

// Write a program that manages robot factory settings.

// When robots come off the factory floor, they have no name. The first time
// you boot them up, a random name is generated, such as RX837 or BC811.

// Every once in a while, we need to reset a robot to its factory settings
// which means that their name gets wiped. The next time you ask, it will
// respond with a new random name.

// The names must be random; they should not follow a predictable sequence.
// Random names means there is a risk of collisions. Your solution should not
// allow the use of the same name twice when avoidable.

//make a class named Robot
//has method 'name' – returns robotName
//create method setName to randomly generate this name and
//checks that name is unique
//has method 'reset'

class Robot {
  static LETTERS = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().slice('');
  static NUMBERS = '0123456789'.slice('');
  static USED_NAMES = [];

  constructor() {
    this.botName = this.setName();
  }
  name() {
    return this.botName;
  }
  setName() {

    let generatedName = this.randomLetter() + this.randomLetter() + this.randomNumber() + this.randomNumber() + this.randomNumber();

    while (true) {
      if (Robot.USED_NAMES.indexOf(generatedName) === -1) {
        break;
      }
      generatedName = this.randomLetter() + this.randomLetter() + this.randomNumber() + this.randomNumber() + this.randomNumber();
    }
    Robot.USED_NAMES.push(generatedName);
    return generatedName;
  }
  reset() {
    this.botName = this.setName();
  }
  randomLetter() {
    return Robot.LETTERS[Math.floor(Math.random() * 26)];
  }
  randomNumber() {
    return Robot.NUMBERS[Math.floor(Math.random() * 10)];
  }
}

// let robit = new Robot();
// console.log(new Robot().name());
// let robit1 = new Robot();
// console.log(robit.name);
// console.log(robit1.name);

module.exports = Robot;