//q1
// Create a function named makeCounterLogger that takes a number as an argument
// and returns a function. When we invoke the returned function with a second
// number, it should count up or down from the first number to the second
// number, logging each number to the console:

function makeCounterLogger(firstNumber) {
  return function(secondNumber) {
    if (firstNumber < secondNumber) {
      for (let index = firstNumber; index <= secondNumber; index += 1) {
        console.log(index);
      }
    } else {
      for (let index = firstNumber; index >= secondNumber; index -= 1) {
        console.log(index);
      }
    }
  };
}

let countlog = makeCounterLogger(5);
countlog(8);
// 5
// 6
// 7
// 8

countlog(2);
// 5
// 4
// 3
// 2

//q2
// In this problem, we'll build a simple todo list program that uses the
// techniques we've seen in this assignment.

// Write a makeList function that creates and returns a new function that
// implements a todo list. The returned function should have the following
// behavior:

// When called with an argument that is not already on the list, it adds that
// argument to the list.
// When called with an argument that is already on the list, it removes the
// element from the list.
// When called without arguments, it prints all of the items on the list. If
// the list is empty, it prints an appropriate message.

function makeList() {
  let list = [];
  return function(item = null) {
    if ((item === null) && (list.length === 0)) {
      console.log('The list is empty.');
    } else if ((item === null) && (list.length > 0)) {
      list.forEach(item => console.log(item));
    } else {
      let itemExists = list.indexOf(item);
      if (itemExists === -1) {
        list.push(item);
        console.log(`${item} added!`);
      } else {
        list.splice(itemExists, 1);
        console.log(`${item} removed!`);
      }
    }
  };
}

let list = makeList();
list();
// The list is empty.

list("make breakfast");
// make breakfast added!

list("read book");
//read book added!

list();
// make breakfast
// read book

list("make breakfast");
// make breakfast removed!

list();
read book

//q4
// Modify the makeList function so that it returns an object that provides the
// interface shown above, including add, list, and remove methods.

function makeList() {
  return {
    listArr: [],
    add(item) {
      this.listArr.push(item);
      console.log(`${item} added!`);
    },
    remove(item) {
      let index = this.listArr.indexOf(item);
      if (index !== -1) {
        this.listArr.splice(index, 1);
        console.log(`${item} removed!`);
      }
    },
    list() {
      this.listArr.forEach(item => console.log(item));
    },
  };
}

let list = makeList();
list.add("peas");
list.list();
list.add('corn');
list.list();
list.remove('peas');
list.list();

//q5
// Update the implementation from problem 1 so that it retains the use of an
// object with methods but prevents outside access to the items the object
// stores internally.

function makeList() {
  let items = [];
  return {
    add(item) {
      items.push(item);
      console.log(`${item} added!`);
    },
    remove(item) {
      let index = items.indexOf(item);
      if (index !== -1) {
        items.splice(index, 1);
        console.log(`${item} removed!`);
      }
    },
    list() {
      items.forEach(item => console.log(item));
    },
  };
}

let list = makeList();
list.add('mary');
list.list();