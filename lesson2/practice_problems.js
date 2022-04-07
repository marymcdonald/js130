//q1

var foo = function() {
  console.log("Bye");
};

function foo() {
  console.log("Hello");
}

foo();

//the function declaration is hoisted to the top of the program and the
// variable declaration is discarded.
// logs 'Hello'

/* answer: incorrect
it logs 'Bye'

This code first defines a variable whose value is a function expression, then declares a function whose name, foo, is the same as the variable. Since function declarations get hoisted above var variables in your code, this code is equivalent to the following:

function foo() {
  console.log("Hello");
}

foo = function() {
  console.log("Bye");
}

foo();

Thus, foo ends up with the first function from the original code as its value, and that displays Bye when invoked.
*/

//q2
for (var index = 0; index < 2; index += 1) {
  console.log(foo);
  if (index === 0) {
    var foo = "Hello";
  } else {
    foo = "Bye";
  }
}

console.log(foo);
console.log(index);

//the variables index and foo are hoisted and first get set to undefined
//then the code is executed and index is set to 0
//undefined is logged to the console
//then foo is set to 'Hello'
//'Hello' is logged to the console
//then foo is reinitialized to 'Bye'
//index is increased to 2
//for loop is exited
//'Bye is logged to the console
//2 is logged to the console

//so what's logged is:
//undefined
//'Hello'
//'Bye'
//2

/* answer: correct
This code uses var to declare the foo variable inside the if statement's truthy
block, which, in turn, is nested within the for loop's block. Despite the
declaration's depth, the variable has function scope. Thus, it is available
both before the declaration on line 4 and in the code after the for loop. On
the first execution of line 2, foo is defined due to hoisting, but its value is
still undefined. On the second execution of line 2, foo has been set to
"Hello". Finally, when the loop exits, foo is "Bye".

The code also uses var for the index loop variable. As with foo, the variable
has function scope, so line 11 shows its value after the loop has ended: 2.
*/

//q3
//The following code doesn't work:
/*
bar();

var bar = function() {
  console.log("foo!");
};
*/

// Without changing the order of the invocation and function definition, update
// this code so that it works.

bar();

function bar() {
  console.log("foo!");
}

/* answer: correct!
If we want to call a function before its body is defined, we need to use a
function declaration.
*/

//q4
var bar = 82;
function foo() {
  var bar = bar - 42;
  console.log(bar);
}

foo();
//the function declaration gets hoisted over the variable declaration
//so the bar variable within foo is set to undefined
//NaN is then logged to the console
//then bar is set to 82

/* answer: correct (NaN)

Hoisting treats this code as though we wrote it like this:
function foo() {
  var bar;
  bar = bar - 42;
  console.log(bar);
}

var bar;
bar = 82;

foo();
*/

//bar in foo has block scope, so the variable outside the function is a new
//variable, not the same bar


//q5
// Rewrite the code below using let instead of var. Your goal here is to change
// the way the variables are declared without altering the output of the
// program.

// function foo(condition) {
//   console.log(bar);

//   qux = 0.5772;

//   if (condition) {
//     var qux = 3.1415;
//     console.log(qux);
//   } else {
//     var bar = 24;

//     var xyzzy = function() {
//       var qux = 2.7183;
//       console.log(qux);
//     };

//     console.log(qux);
//     console.log(`xyzzy(): ${xyzzy()}`);
//   }

//   qux = 42;
//   console.log(qux);
// }

// foo(true);
// foo(false);

function foo(condition) {
  let bar;
  console.log(bar);

  let qux = 0.5772;

  if (condition) {
    qux = 3.1415;
    console.log(qux);
  } else {
    bar = 24;

    let xyzzy = function() {
      let qux = 2.7183;
      console.log(qux);
    };

    console.log(qux);
    console.log(`xyzzy(): ${xyzzy()}`);
  }

  qux = 42;
  console.log(qux);
}

foo(true);
foo(false);

/*
qux =undefined
bar
xyzzy

logged:
undefined
qux = 0.5772
qux = 3.1415
3.1415
qux = 42
42

undefined
qux = 0.5772
bar = 24
qux = 2.7183
0.5772
2.7183
qux = 42
42
*/


//q6
// In a process called hoisting, JavaScript appears to reorganize code in such
// a way that certain declarations and definitions appear to be moved around.
// While this organization doesn't really occur, it's a useful mental model for
// understanding scope in a JavaScript program.

// Rewrite the following code in a way that shows what the code would look like
// if hoisting were a real process that actually reorganized your code. The
// intent here is to clearly show how and when the various identifiers in this
// program are defined with respect to the code that actually gets executed.

Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};

function Pet(name, image) {
  this.name = name;
  this.image =  image;
}

class Image {
  constructor(file) {
    this.file = file;
  }
}

var catImage = new Image("cat.png");
var pudding = new Pet("Pudding", catImage);

//with hoisting:

var catImage;
var pudding;

catImage = Image('cat.png');
this.file = 'cat.png';
pudding = Pet('Pudding', catImage);
this.name = 'Pudding';
this.image = 'cat.png';

/*answer:

function Pet(name, image) {
  this.name = name;
  this.image =  image;
}

let Image;
var catImage;
var pudding;

Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};

Image = class {
  constructor(file) {
    this.file = file;
  }
};

catImage = new Image("cat.png");
pudding = new Pet("Pudding", catImage);

Recall that only the class's name gets hoisted; the class doesn't get defined
until the definition is executed. Thus, we have to create a variable for the
class name, then later assign it a class expression.

There are other ways to depict the effect of hoisting with this code. For
instance, the following code is also correct:

var Pet;
let Image;
var catImage;
var pudding;

Pet = function(name, image) {
  this.name = name;
  this.image =  image;
};

// omitted code...
*/