/*
Write a simple linked list implementation. The linked list is a fundamental data structure in computer science, often used in the implementation of other data structures.

The simplest kind of linked list is a singly linked list. Each element in the list contains data and a "next" field pointing to the next element in the list of elements. This variant of linked lists is often used to represent sequences or push-down stacks (also called a LIFO stack; Last In, First Out).

Let's create a singly linked list whose elements may contain a range of data such as the numbers 1-10. Provide functions to reverse the linked list and convert a linked list to and from an array.
*/

//PEDAC

//create a class Element, takes one or more elements
//create class SimpleLinkedList, no arguments

//Element methods:
//constructor has value and 'next' value
//next - returns next element or null (if there is no next element)
//isTail – true or false
//datum – value of element

//head, next methods can be chained – must return objects

//SimpleLinkedList methods:
//size - returns number. empty list is 0
//isEmpty - boolean
//push - add element to list
//pop
//peek - null (empty list), otherwise 'next' element
//reverse

//static method from Array
//also can expect empty array, null

//empty array – size is 0
//SimpleLinkedList.fromArray([]) same as
//new SimpleLinkedList();

//for non-empty arrays:
//starting backwards
//create element of each element of array


"use strict";

class Element {
  constructor(value, next = null) {
    this.value = value;
    this.nextElem = next;
  }
  datum() {
    return this.value;
  }
  next() {
    return this.nextElem;
  }
  isTail() {
    if (this.nextElem === null) {
      return true;
    }
    return false;
  }

}

class SimpleLinkedList {
  constructor() {
    this.list = [];
  }
  size() {
    return this.list.length;
  }
  isEmpty() {
    if (this.size() === 0) {
      return true;
    }
    return false;
  }
  push(value) {
    let elem;
    if (!this.isEmpty()) {
      elem = new Element(value, this.list[this.size() - 1]);
    } else {
      elem = new Element(value);
    }
    
    this.list.push(elem);
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.head().datum();
  }
  head() {
    return this.list[this.size() - 1];
  }
  pop() {
    return this.list.pop().datum();
  }
  static fromArray(arr) {
    if (arr === null || arr.length === 0) {
      return new SimpleLinkedList();
    }

    let arrCreatedList = new SimpleLinkedList();
    for (let index = arr.length - 1; index >= 0; index -= 1) {
      arrCreatedList.push(arr[index]);
    }
    return arrCreatedList;
  }
  toArray() {
    if (this.isEmpty()) {
      return [];
    }
    let tempArr = [];
    while(true){
      tempArr.push(this.pop());
      if(this.isEmpty()) {
        break;
      }
    }
    return tempArr;
  }
  reverse() {
    let tempArr = this.toArray();
    tempArr.reverse();
    return SimpleLinkedList.fromArray(tempArr);
  }
}

// let list = SimpleLinkedList.fromArray([1, 2]);
// let list = SimpleLinkedList.fromArray([1]).toArray();
// console.log(list);

module.exports = {SimpleLinkedList, Element};