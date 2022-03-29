//Iteration and Callbacks

function forEach(array, callback, thisArg) {

  for (let index = 0; index < array.length; index += 1) {
    callback.call(thisArg, array[index], index, array);
  }
}

// let arr = [1, 2, 3, 4];
// forEach(arr, value => console.log(value * value));

//Defining the Execution Context

class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

let foo = new Foo("Item: ");
// [1, 2, 3].forEach(foo.showItem, foo);
// [4, 5, 6].forEach(foo.showItem);

// forEach(["a", "b", "c"], item => console.log(item));
// forEach([1, 2, 3], foo.showItem, foo);
// forEach([4, 5, 6], foo.showItem);

//Adding the Index and Array Arguments

["a", "b", "c"].forEach(function(value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});

function something(value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
}

forEach(["a", "b", "c"], something);

// alternatively
// forEach(["a", "b", "c"], function(value, index, arr) {
//   console.log(`After ${value} comes ${arr[index + 1]}`);
// });