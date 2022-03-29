//Basic Emulation Problems
//q1

// Write a function that acts like the built-in Array.prototype.filter method.
// For this problem, you only need to emulate the most basic behavior:
// filtering elements of an array by examining the array values. You don't have
// to include the thisArg argument or support multiple arguments to the
// callback function, but feel free to add them if you like.
// Note that the function should not mutate the input array.

// function filter(array, callback) {
//   let returnArr = [];
//   for (let index = 0; index < array.length; index += 1) {
//     if (callback(array[index])) {
//       returnArr.push(array[index]);
//     }
//   }
//   return returnArr;
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
// console.log(filter(numbers, number => number < 0)); // => []
// console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(filter(values, value => typeof value === "string"));
// // => [ 'abc', 'xyz' ]

//q2
// Write a function that acts like the built-in Array.prototype.map method. For
// this problem, you only need to emulate the most basic behavior: transforming
// the elements of an array by using the array values. You don't have to
// include the thisArg argument or support multiple arguments to the callback
// function, but feel free to add them if you like.
// Note that the function should not mutate the input array.

// function map(array, callback) {
//   let returnArr = [];
//   for (let index = 0; index < array.length; index += 1) {
//     returnArr.push(callback(array[index]));
//   }
//   return returnArr;
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
// console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
// console.log(map(numbers, () => false));
// // => [ false, false, false, false, false ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(map(values, value => String(value)));
// // => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]

//Emulating and Using the `reduce` Method
//q1

// Write a function that acts like the built-in Array.prototype.reduce method.
// For this problem, you only need to emulate the most basic behavior: reducing
// the elements of an array down to a single value based on the original array
// values. The result may be a primitive value, an object, or another array.
// You don't have to include the thisArg argument or support multiple arguments
// to the callback function, but feel free to add them if you like.

// Note that the function should not mutate the input array. Don't forget to
// account for the initialValue argument!

function reduce(array, )

let numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
console.log(reduce([], (accum, number) => accum + number));
// => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));
// => ["Curly", "Larry", "Mo"]