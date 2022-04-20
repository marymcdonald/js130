//q1

// Rewrite the following code using classic JavaScript syntax. That is, write
// it without using any of the shorthand notations described in the previous
// assignment.

function foo(bar, qux, baz) {
  return {
    bar,
    baz,
    qux,
  };
}

function foo(bar, qux, baz) {
  return {
    bar: bar,
    baz: baz,
    qux: qux,
  };
}

//q2
// Rewrite the following code using classic JavaScript syntax:

function foo() {
  return {
    bar() {
      console.log("bar");
    },
    qux(arg1) {
      console.log("qux");
      console.log(arg1);
    },
    baz(arg1, arg2) {
      console.log("baz");
      console.log(arg1);
      console.log(arg2);
    },
  };
}

function foo() {
  return {
    bar: function() {
      console.log('bar');
    },
    qux: function(arg1) {
      console.log('qux');
      console.log(arg1);
    },
    baz: function() {
      console.log('baz');
      console.log(arg1);
      console.log(arg2);
    },
  };
}

//q3
// Rewrite the following code using classic JavaScript syntax:

function foo(one, two, three) {
  return {
    bar: one,
    baz: two,
    qux: three,
  };
}

// let { baz, qux, bar } = foo(1, 2, 3);

let obj = foo(1,2,3);
let baz = obj.baz;
let qux = obj.qux;
let bar = obj.bar;

//q4
// Rewrite the following code using classic JavaScript syntax:

function foo([ one, , three ]) {
  return [
    three,
    5,
    one,
  ];
}

let array = [1, 2, 3];
let result = foo(array);
// let [ bar, qux, baz ] = result;

let bar = result[0];
let qux = result[1];
let baz = result[2];

//q5
// Rewrite the following code using classic JavaScript syntax:
function product(num1, num2, num3) {
  return num1 * num2 * num3;
}

let array = [2, 3, 5];
// let result = product(...array);
let result = product.apply(null, array);

//q6
// Rewrite the following code using classic JavaScript syntax:

function product(...numbers) {
  return numbers.reduce((total, number) => total * number);
}

let result = product(2, 3, 4, 5);

function product() {
  return [].reduce.call(arguments, (total, number) => total * number);
}

let result = product(2, 3, 4, 5);


/* alternatively:
function product() {
  let args = Array.from(arguments);
  return args.reduce((total, number) => total * number);
}

let result = product(2, 3, 4, 5);
*/

//q7
// Assume that you have some code that looks like this:

function qux() {
  let animalType = "cat";
  let age = 9;
  let colors = ["black", "white"];
  // missing code
}

let { type, age, colors } = qux();
console.log(type);    // cat
console.log(age);     // 9
console.log(colors);  // [ 'black', 'white' ]

// // Using shorthand notation, what is the missing code?
return {
  type: animalType,
  age,
  colors
};

//q8
// Write a function that takes 5 string arguments, and returns an object with 3
// properties:

// first: the first argument
// last: the last argument
// middle: the middle 3 arguments as a sorted array
// After writing the function, write some code to call the function. The
// arguments you provide should come from an array. You should create local
// variables named first, last, and middle from the return value.

// Use shorthand syntax wherever you can.

function question(arr) {
  let [first,...otherStuff] = arr;
  let middleUnsorted = otherStuff.slice(0, otherStuff.length - 2);
  return {
    first,
    last: otherStuff[otherStuff.length - 1],
    middle: middleUnsorted.sort((a,b) => a - b),
  };
}

let {first, last, middle} = question([15, 26, 7, 9, 10]);
console.log(first);
console.log(last);
console.log(middle);


/* answer:
function qux(first, middle1, middle2, middle3, last) {
  return {
    first,
    last,
    middle: [middle1, middle2, middle3].sort(),
  };
}

let arr = ["Fluffy", "Pudding", "Mister", "Ben", "Butterscotch"];
let { first, last, middle } = qux(...arr);
*/