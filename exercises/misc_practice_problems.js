//q1
// How can we refactor the function definition below (without changing the
// function invocation) so that we don't need to use the arguments object?

// function sum() {
//   values = Array.prototype.slice.call(arguments);

//   return values.reduce(function(a, b) {
//     return a + b;
//   });
// }

// sum(1, 4, 5, 6); // 16

function sum(...args) {
  let values = Array.prototype.slice.call(args);

  return values.reduce(function(a, b) {
    return a + b;
  });
}

console.log(sum(1, 4, 5, 6)); // 16

/*
apparently you can make it more simple:
The rest parameter syntax allows us to capture an indefinite number of
arguments in an array.

function sum(...values) {
  return values.reduce(function(a, b) {
    return a + b;
  });
}
*/

//q2
// How can we refactor the invocation of the function formatName (without
// changing the function definition) so that we don't need to grab each element
// of the array fullName by index?

function formatName(firstName, middleName, lastName) {
  return `${lastName}, ${firstName} ${middleName[0]}.`;
}

let fullName = ['James', 'Tiberius', 'Kirk'];

// console.log(formatName(fullName[0], fullName[1], fullName[2]));
console.log(formatName(...fullName));
// logs: Kirk, James T.