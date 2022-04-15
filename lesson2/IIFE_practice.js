//q1
// Will the following code execute without error? Try to answer without running
// it.

function() {
  console.log("Sometimes, syntax isn't intuitive!");
}();

//I don't think so. Needs to be evaluated as an expression first (parentheses
// around definition), then you can tack on () to run the function.

/* answer: yep!
No, the code won't execute. Instead, it raises a syntax error. A function
declaration must be converted to a function expression before you can invoke it
with immediate invocation syntax.
*/

//q2
// Rewrite the example from the previous so that it executes without error.

(function() {
  console.log("Sometimes, syntax isn't intuitive!");
})();

//q3
// The code below throws an error. Why? Correct the problem by using an IIFE.

var sum = 0;
sum += 10;
sum += 31;

let numbers = [1, 7, -3, 3];

function sum(arr) {
  return arr.reduce((sum, number) => {
    sum += number;
    return sum;
  }, 0);
}

sum += sum(numbers);  // ?

//The trouble is because we have both a variable and a function named `sum`.
//To fix it with an IIFE:

var sum = 0;
sum += 10;
sum += 31;

let numbers = [1, 7, -3, 3];

sum += (function (arr) {
  return arr.reduce((sum, number) => {
    sum += number;
    return sum;
  }, 0);
})(numbers);

console.log(sum);

/* answer:
The last line in the example shows a variable naming conflict. We intend to
invoke the sum function we declared on line 7, but sum actually references the
variable defined on line 1. Since the variable doesn't reference a function,
our code throws a TypeError when we try to invoke one.
*/

//q4
// Consider the following code and output:

countdown(7);
7
6
5
4
3
2
1
0

// Replace the invocation of countdown with an IIFE that produces the same
// results.

(function (num) {
  for (let index = num; index >= 0; index -= 1) {
    console.log(index);
  }
})(7);

//q5
// Is the named function inside in this IIFE accessible in the global scope?

(function foo() {
  console.log('Bar');
})();

foo() // ?

//I don't think it is. It's in a block of its own?

/* answer:
No. Even though the function is named, it isn't visible outside of the scope 
created by the IIFE.
*/

//q6
// Rewrite this code using an IIFE. Your solution should no longer need the
// name foo.

function foo(start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
}

let bar = foo(2);
let result = bar(3);
result += bar(4);
result += bar(5);
console.log(result);


let bar = (function (start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
})(2);

let result = bar(3);
result += bar(4);
result += bar(5);
console.log(result);

//q7
// For an extra challenge, refactor the solution to problem 4 using recursion.
// Bear in mind that named functions created as IIFEs can be referenced by
// those same functions. That is, you can call a function's name in the body of
// the IIFE.

(function (num) {
  for (let index = num; index >= 0; index -= 1) {
    console.log(index);
  }
})(7);

/* answer:

(function recursiveCounter(number) {
  console.log(number);

  if (number !== 0) {
    recursiveCounter(number - 1);
  }
})(7);
*/


