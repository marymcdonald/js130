//q1
// What do the 4 console.log statements at the end of this program print?

let counter = 0;

function makeCounter() {
  return function() {
    counter += 1;
    return counter;
  }
}

let incrementCounter = makeCounter(); //assigned function definition: lines 7-9
console.log(incrementCounter());
console.log(incrementCounter());

incrementCounter = makeCounter();
console.log(incrementCounter());
console.log(incrementCounter());

// it should log:
// 1
// 2
// 1
// 2

/* answer:
The four console.log calls print 1, 2, 3, and 4 respectively. Since counter has
global scope, its value gets set to 0 only once, and closure ensures that the
function returned by makeCounter contains an envelope with a pointer to that
variable. Each invocation of incrementCounter assigns counter to a new value
that is the previous value plus 1.
*/

//q2
// Let's modify our program a little by moving the let statement into the
// function returned by makeCounter. What do the 4 console.log statements at
// the end of this program print?

function makeCounter() {
  return function() {
    let counter = 0;
    counter += 1;
    return counter;
  };
}

let incrementCounter = makeCounter();
console.log(incrementCounter());
console.log(incrementCounter());

incrementCounter = makeCounter();
console.log(incrementCounter());
console.log(incrementCounter());

//it should log:
// 1
// 1
// 1
// 1
//isn't it defining & initializing with each time the function definition is
// executed?

/* answer:
All four console.log calls print 1. Since counter is declared and initialized
in the function returned by makeCounter, closure plays no part in its
execution. Instead, counter gets created and initialized to 0 each time we call
incrementCounter.
*/

//q3
// Let's move the variable declaration into makeCounter now. What do the 4
// console.log statements at the end of this program print?

function makeCounter() {
  let counter = 0;

  return function() {
    counter += 1;
    return counter;
  };
}

let incrementCounter = makeCounter();
console.log(incrementCounter());
console.log(incrementCounter());

incrementCounter = makeCounter();
console.log(incrementCounter());
console.log(incrementCounter());

//it should log:
//1
//2
//1
//2

/*answer:

In this case, the first call to console.log prints 1, the second prints 2, and
the third and fourth print 1 and 2 again.
This time, the two invocations of makeCounter each return a function that has
access to a local variable named counter, but, in both cases, the variable is
distinct.
*/

//q4
// We'll now make some changes to how we create the output. What do the 4
// console.log statements at the end of this program print?

function makeCounter() {
  let counter = 0;

  return function() {
    counter += 1;
    return counter;
  }
}

let incrementCounter1 = makeCounter();
let incrementCounter2 = makeCounter();

console.log(incrementCounter1());
console.log(incrementCounter1());

console.log(incrementCounter2());
console.log(incrementCounter2());

//1
//2
//1
//2

/* answer:
Curiously, the results are the same as in the previous problem: 1, 2, 1, 2. It
demonstrates that each returned function has an independent copy of the counter
variable. They are, in fact, two different variables entirely; they just have
the same name. When we increment the counter variable from incrementCounter1's
envelope, it has no effect on the one in incrementCounter2's envelope.
*/

//q5
// Write a function named makeMultipleLister that you can call with a number as
// an argument. The function should return a new function that, when invoked
// logs every positive integer multiple of that number less than 100.

function makeMultipleLister(num) {
  return function() {
    for (let index = num; index < 100; index += num) {
      console.log(index);
    }
  };
}

let lister = makeMultipleLister(17);
lister();

/* output
17
34
51
68
85
*/


//q6
// Write a program that uses two functions, add and subtract, to manipulate a
// running total. When you invoke either function with a number, it should add
// or subtract that number from the running total and log the new total to the
// console.
let counter = 0;

function add(num) {
  counter += num;
  console.log(counter);
}

function subtract(num) {
  counter -= num;
  console.log(counter);
}

add(1);       // 1
add(42);      // 43
subtract(39); // 4
add(6);       // 10

//q7
// Without running the following code, determine what value it logs on the last
// line. Explain how the program arrived at that final result.

function foo(start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
}

let bar = foo(2);
// so bar is function definition with prod = 2
let result = bar(3);
// result = 6
result += bar(4);
// result = 6 + 24 = 30 -- no, prod = 6, so result = 24
result += bar(5);
// result = 30 + 150 = 180
console.log(result);

/* answer:
On line 9 (let bar = foo(2)), we create a function that we assign to the bar
variable. This function takes a single argument, multiplies it with a variable
named prod, and returns the result. Even though prod is out of scope when we
call bar, closure lets bar retain access to prod.

On line 10, we call the returned function with a value of 3. Due to closure,
the function has access to prod, which is currently set to 2. It multiplies
prod by 3, and returns the new value of prod, i.e., 6. We assign the return
value to result.

On line 11, we again call the returned function, but this time with an argument
of 4. Since we set prod to 6 in the previous call, we end up multiplying 6 by
4, and setting prod to the result, 24. We then return that value and add it to
the previous result, 6, which produces a result of 30.

Line 12 is similar. This time, we multiply prod (whose value is 24) by 5, and
set prod to the result, 120. We then return 120 and add it to the previous
result value of 30, which produces the final value of 150.
*/

//q8
// Write a function named later that takes two arguments: a function and an
// argument for that function. The return value should be a new function that
// calls the input function with the provided argument.

function later(func, arg) {
  return function() {
    return func(arg);
  };
}

const logger = message => console.log(message);
let logWarning = later(logger, "The system is shutting down!");
logWarning(); // The system is shutting down!

//q9
// Write a function named later2 that takes two arguments: a function and an
// argument for that function. The return value should be a new function that
// also takes an argument. The new function should call the input function with
// the argument provided to later2 and the argument provided to the returned
// function.

function later2(func, arg) {
  return function(arg2) {
    return func(arg, arg2);
  };
}

const notify = function(message, when) {
  console.log(`${message} in ${when} minutes!`);
};

let shutdownWarning = later2(notify, "The system is shutting down");
shutdownWarning(30); // The system is shutting down in 30 minutes!

/* alternatively:
function later2(func, argument) {
  return secondArgument => func(argument, secondArgument);
}
In this code, we create a new function called shutdownWarning that issues the
shutdown warning specified by the argument to later2. The new function takes an
argument that it passes to the original input function as its second argument.
*/

//q10
// The built-in Function.prototype.bind method performs partial function
// application by allowing you to specify some of the function's arguments when
// you invoke bind. It also permanently binds the new function to a specific
// execution context with its first argument. That binding is, in a sense, also
// an example of partial function application. Here, the "argument" we're
// applying to the function is the function's execution context.

// Write a function that emulates the context binding aspect of bind. That is,
// your version of bind should merely call the function with the desired
// context; it doesn't need to pass any arguments to the function.

"use strict";

function bind(context, func) {
  return function() {
    return func.call(context);
  };
}

let obj = {};
let boundFunc = bind(obj, function() {
  this.foo = "bar";
});

boundFunc();
console.log(obj); // { foo: 'bar' }