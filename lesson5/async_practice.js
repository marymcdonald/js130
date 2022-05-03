'use strict';
//q1
// Write a JavaScript function named delayLog that loops through the numbers
// from 1 to 10, and logs each number after that number of seconds. It should
// log 1 after 1 second, 2 after 2 seconds, and so on.

// function delayLog() {
//   for (let number = 1; number < 11; number += 1) {
//     setTimeout(function() {
//       console.log(number);
//     }, number * 1000);
//   }
// }

// delayLog();

//q2
//In our solution for the previous problem, what do you think would happen if
// you replaced let delay with var delay? Go ahead and try it and see if you
// can explain the difference in behavior.

function delayLog() {
  for (var delay = 1; delay <= 10; delay += 1) {
    setTimeout(() => console.log(delay), delay * 1000);
  }
}

delayLog();

//it prints '11' eleven times
//var is hoisted....

/* answer:

That is certainly a different and perhaps surprising result! The issue here is
that a var declaration has function scope, so the loop uses the same delay
variable with each iteration. Due to closure, each invocation of the callback function sees the current state of the delay variable. Since the callback doesn't get called until long after the loop finishes, it gets the final value of delay, e.g., 11.

Since let has block scope, each iteration in solution to the previous problem forms a closure with a different variable. Thus, each callback's closure encloses a different delay variable.
*/

//q3
// In what sequence will the JavaScript runtime run the following lines of
// code? Number them from 1-8 to show the order of execution.

setTimeout(function() {   //1
  console.log('Once');    //5
}, 1000);

setTimeout(function() {   //2
  console.log('upon');    //7
}, 3000);

setTimeout(function() {   //3
  console.log('a');       //6
}, 2000);

setTimeout(function() {   //4
  console.log('time');    //8
}, 4000);

//correct!

//q4
// In what sequence does the JavaScript runtime run the functions q(), d(), n()
// , z(), s(), f(), and g() in the following code?

setTimeout(function() {     //1
  setTimeout(function() {   //6
    q();                    //12
  }, 15);                 

  d();                      //8

  setTimeout(function() {   //9
    n();                    //11
  }, 5);

  z();                      //10
}, 10);

setTimeout(function() {     //2
  s();                      //7
}, 20);

setTimeout(function() {     //3
  f();                      //4
});

g();                        //5

// f(), g(), s(), d(), z(), n(), q()

/* answer:
g(), f(), d(), z(), n(), s(), q()

Notice that g() still comes before f() even though the timeout duration defaults to 0. The reason for this behavior is that delays may be longer than specified.
*/

//q5
// Write a function named afterNSeconds that takes two arguments: a callback
// and a time duration in seconds. It should wait for the indicated period,
// then invoke the callback function.

function afterNSeconds(callback, time) {
  setTimeout(callback, time * 1000);
}

//correct!