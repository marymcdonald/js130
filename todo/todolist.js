// This class represents a todo item and its associated
// data: the todo title and a flag that shows whether the
// todo item is done.

class Todo {
  static DONE_MARKER = "X";
  static UNDONE_MARKER = " ";

  constructor(title) {
    this.title = title;
    this.done = false;
  }

  toString() {
    let marker = this.isDone() ? Todo.DONE_MARKER : Todo.UNDONE_MARKER;
    return `[${marker}] ${this.title}`;
  }

  markDone() {
    this.done = true;
  }

  markUndone() {
    this.done = false;
  }

  isDone() {
    return this.done;
  }

  getTitle() {
    return this.title;
  }
}


// This class represents a collection of Todo objects.
// You can perform typical collection-oriented actions
// on a TodoList object, including iteration and selection.

class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  add(todo) {
    if (!(todo instanceof Todo)) {
      throw new TypeError("can only add Todo objects");
    }
    this.todos.push(todo);
  }
  size() {
    return this.todos.length;
  }
  first() {
    return this.todos[0];
  }
  last() {
    return this.todos[this.size() - 1];
  }
  //my solution:
  // itemAt(index) {
  //   if (!(this.todos[index])) {
  //     throw new ReferenceError(`invalid index: ${index}`);
  //   }
  //   return this.todos[index];
  // }

  itemAt(index) {
    this._validateIndex(index);
    return this.todos[index];
  }

  _validateIndex(index) { // _ in name suggests a "private" method
    if (!(index in this.todos)) {
      throw new ReferenceError(`invalid index: ${index}`);
    }
  }

  markDoneAt(index) {
    this.itemAt(index).markDone();
  }
  markUndoneAt(index) {
    this.itemAt(index).markUndone();
  }
  isDone() {
    return this.todos.every(element => element.isDone() === true);
  }
  shift() {
    return this.todos.shift();
  }
  pop() {
    return this.todos.pop();
  }
  removeAt(index) {
    let removedItem = this.itemAt(index);
    this.todos.splice(index, 1);
    return removedItem;
  }
  toString() {
    let title = `---- ${this.title} ----`;
    let list = this.todos.map(todo => todo.toString()).join('\n');
    return `${title}\n${list}`;
  }
  forEach(callback) {
    this.todos.forEach(callback);
  }
  filter(callback) {
    let filteredList = new TodoList(this.title);
    this.forEach(todo => {
      if (callback(todo) === true) {
        filteredList.add(todo);
      }
    });
    return filteredList;
  }
  findByTitle(title) {
    return this.filter(todo => todo.getTitle() === title).first();
  }
  allDone() {
    return this.filter(todo => todo.isDone());
  }
  allNotDone() {
    return this.filter(todo => !todo.isDone());
  }
  markDone(title) {
    if (this.findByTitle(title)) {
      this.findByTitle(title).markDone();
    }
  }
  markAllDone() {
    this.forEach(todo => todo.markDone());
  }
  markAllUndone() {
    this.forEach(todo => todo.markUndone());
  }
  toArray() {
    let todoArray = [];
    this.forEach(todo => todoArray.push(todo));
    return todoArray;
    //alternatively
    //return this.todos.slice();
  }
}

let todo1 = new Todo("Buy milk");
let todo2 = new Todo("Clean room");
let todo3 = new Todo("Go to the gym");
let todo4 = new Todo("Go shopping");
let todo5 = new Todo("Feed the cats");
let todo6 = new Todo("Study for Launch School");
let list = new TodoList("Today's Todos");

list.add(todo1);
list.add(todo2);
list.add(todo3);
list.add(todo4);
list.add(todo5);
list.add(todo6);

