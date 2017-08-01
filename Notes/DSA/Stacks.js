/**
 * Stacks

    - Last In First Out (LIFO)
    - Last element in, first element out 
    - (Pile of books)
**/

function Stack() {

    let items = [];

    this.push = function(element) { // Add elements to top of stack (end)
        items.push(element);
    }

    this.pop = function(element) { // Last item added is first one out
        return items.pop();
    }

    this.peek = function(element) {
        return items[items.length - 1]; // Returns last added item
    }

    this.isEmpty = function() {
        return items.length == 0; // Returns (boolean) if stack is empty
    }

    this.size = function() { // Returns size of stack
        return items.length;
    }

    this.clear = function() { // Empties the stack
        items = [];
    }

    this.print = function() {
        console.log(items.toString());
    }
}

let stack = new Stack();
console.log(stack.isEmpty()); // outputs true

stack.push(5);
stack.push(8);

console.log(stack.peek()); // outputs 8

// Declare stack using ES6 syntax

let _items = Symbol(); // Creates a private "symbol" property

class Stack {
    constructor() {
        this[_items] = []; // Initiate _items inside constructor, essentially making it private
    }
    push(element) {
        this[_items].push(element);
    }
}

// ES6 classes using WeakMap


