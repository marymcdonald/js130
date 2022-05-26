/*
Meetups are a great way to meet people who share a common interest. Typically, meetups happen monthly on the same day of the week. For example, a meetup's meeting may be set as:

The first Monday of January 2021
The third Tuesday of December 2020
The teenth wednesday of December 2020
The last Thursday of January 2021

In this program, we'll construct objects that represent a meetup date. Each object takes a month number (1-12) and a year (e.g., 2021). Your object should be able to determine the exact date of the meeting in the specified month and year. For instance, if you ask for the 2nd Wednesday of May 2021, the object should be able to determine that the meetup for that month will occur on the 12th of May, 2021.

The descriptors that may be given are strings: 'first', 'second', 'third', 'fourth', 'fifth', 'last', and 'teenth'. The case of the strings is not important; that is, 'first' and 'fIrSt' are equivalent. Note that "teenth" is a made up word. There was a meetup whose members realised that there are exactly 7 days that end in '-teenth'. Therefore, it's guaranteed that each day of the week (Monday, Tuesday, ...) will have exactly one date that is the "teenth" of that day in every month. That is, every month has exactly one "teenth" Monday, one "teenth" Tuesday, etc. The fifth day of the month may not happen every month, but some meetup groups like that irregularity.

The days of the week are given by the strings 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', and 'Sunday'. Again, the case of the strings is not important.
*/

//create a Meetup class
//takes a year and a month
//day method – called by an instance of the Meetup class
//arguments are day (case insensitive) & schedule

//example of Date object: 
//let birthday = new Date(1995, 11, 17) – Dec 17, 1995
//month is 0-indexed

//needs:
//map day to a number [0-6]
//map schedule to a number: first through fifth, last, teenth

//figure out day of 1st of month, then find first 'day'
//add 1 to first of month until %7 is equal to 'day'

//from there, figure out all 'days' in that month

//then check if the schedule number has an item whose index corresponds to it
//return a new date

//make leap year helper function: /4, but not by /100, /400

//teenth – filter array for dates between 13 and 19
"use strict";

class Meetup {
  static DAYS_TO_NUM = {'sunday': 0, 'monday': 1, 'tuesday': 2, 'wednesday': 3, 'thursday': 4, 'friday': 5, 'saturday': 6};
  static SCHEDULE_TO_NUM = {'first': 0, 'second': 1, 'third': 2, 'fourth': 3, 'fifth': 4, 'last': 'n', 'teenth': 10};

  constructor(year, month) {
    this.year = year;
    this.month = month - 1;
  }
  
  day(day, schedule) {
    let fixedDay = Meetup.DAYS_TO_NUM[day.toLowerCase()];
    let fixedSchedule = Meetup.SCHEDULE_TO_NUM[schedule.toLowerCase()];
    let availableDates = this._daysOfMonth(fixedDay);

    let exactDayDate = 0;

    if (fixedSchedule === 'n') {
      exactDayDate = availableDates[availableDates.length - 1]
      return this._createDate(exactDayDate);
    } else if (fixedSchedule === 10) {
      exactDayDate = availableDates.filter(date => (date < 20 && date > 13))[0];
      return this._createDate(exactDayDate);
    }

    if (!availableDates[fixedSchedule]) {
      return null
    } 

    exactDayDate = availableDates[fixedSchedule];
    return this._createDate(exactDayDate);
  }

  _createDate(desiredDate) {
    return new Date(this.year, this.month, desiredDate);
  }

  _daysOfMonth(desiredDay) {
    let possibleDates = [];
    let firstOfMonth = new Date(this.year, this.month, 1);
    let dayFirstofMonth = firstOfMonth.getDay();
    let firstDesiredDay = dayFirstofMonth;

    let counter = 0;
    while(true) {
      if ((firstDesiredDay % 7) === desiredDay) {
        break;
      }
      counter += 1;
      firstDesiredDay += 1;
    }
    let date = counter + 1;
    possibleDates.push(date);

    let monthLimit = (this.month % 2 === 1) ? 31 : 30;

    if (this.month === 1) {
      monthLimit = this._isLeapYear();
    }

    while(true) {
      date += 7;
      if (date > monthLimit) {
        break;
      }

      possibleDates.push(date);
    }
    return possibleDates;
  }

  _isLeapYear() {
    if (this.year % 4 === 0) {
      if((this.year % 100 !== 0) && (this.year % 400 !== 0)) {
        return 29;
      }
    }
    return 28;
  }
}

// let meetup = new Meetup(2016, 10); 
// console.log(meetup.day('monday', 'teenth'));
// console.log(meetup.day('monday', 'teenth').toString());

module.exports = Meetup;