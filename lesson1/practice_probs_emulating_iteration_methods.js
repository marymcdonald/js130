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

function reduce(array, callback, initialValue) {
  let returnValue;
  if (initialValue) {
    returnValue =
    array.length > 0 ? callback(initialValue, array[0]) : initialValue;
  } else {
    returnValue = array[0];
  }
  for (let index = 1; index < array.length; index += 1) {
    let value =  callback(returnValue, array[index]);
    returnValue = value;
  }
  return returnValue;
}

// let numbers = [1, 2, 3, 4, 5];
// console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
// console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
// console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
// console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
// console.log(reduce([], (accum, number) => accum + number));
// // => undefined

// let stooges = ["Mo", "Larry", "Curly"];
// console.log(reduce(stooges, (reversedStooges, stooge) => {
//   reversedStooges.unshift(stooge);
//   return reversedStooges;
// }, []));
// // => ["Curly", "Larry", "Mo"]

//alternative answer:
// function reduce(array, callback, initialValue) {
//   let accumulator = initialValue;
//   let index = 0;

//   if (accumulator === undefined) {
//     accumulator = array[0];
//     index = 1;
//   }

//   while (index < array.length) {
//     accumulator = callback(accumulator, array[index]);
//     index += 1;
//   }

//   return accumulator;
// }

//q2
// `Array.prototype.reduce` can be an incredibly useful function. You're not
// limited to simple accumulation-style processing, but can perform a wide
// variety of different tasks with it. For instance, you can emulate many of
// the standard Array methods, including filter, map, and more.

// Let's try it. Write a function that works like the filter function from
// problem 1. This time, though, you should use Array.prototype.reduce to
// filter the input array.

// function filter(array, callback) {
//   return array.reduce((a,b) => {
//     if (callback(b)) {
//       a.push(b);
//     }
//     return a;
//   }, []);
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
// console.log(filter(numbers, number => number < 0)); // => []
// console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(filter(values, value => typeof value === "string"));
// // => [ 'abc', 'xyz' ]

//q3
// Let's put reduce to work with emulating map as well. Write a function that
// works like the map function from problem 2. This time, though, use Array
// prototype.reduce to transform the input array.

function map(array, callback) {
  return array.reduce((mappedItems, value) => {
    mappedItems.push(callback(value));
    return mappedItems;
  }, []);
}

let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]

// a version of forEach that operates on objects:
function objForEach(object, callback) {
  for (let property in object) {
    if (object.hasOwnProperty(property)) {
      callback(property, object[property]);
    }
  }
}

let obj = { foo: 1, bar: 2, qux: 3 };
objForEach(obj, (property, value) => {
  console.log(`the value of ${property} is ${value}`);
});