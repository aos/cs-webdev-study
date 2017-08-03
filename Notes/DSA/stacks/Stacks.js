/**
 * Stacks

    - Last In First Out (LIFO)
    - Last element in, first element out 
    - (Pile of books)
**/

function StackFN() {

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
        console.log(items.toString())
    }
}

// let stack1 = new Stack();
//console.log(stack.isEmpty()); // outputs true

//stack.push(5);
//stack.push(8);

//console.log(stack.peek()); // outputs 8

// Declare stack using ES6 syntax

let _items = Symbol(); // Creates a private "symbol" property

class StackSY {
    constructor() {
        this[_items] = []; // Initiate _items inside constructor, essentially making it private
    }
    push(element) {
        this[_items].push(element);
    }
}

// ES6 classes using WeakMap
// Stores a key/value pair, where key is an object, and value can be any data type
// To ensure that the property will be private in a class
// Must wrap in colsure, and return stack

let StackWM = (function() {
    const items = new WeakMap();

    class Stack {
        constructor() {
            items.set(this, []); // Sets the items value by setting the Stack (this) as the key to the WeakMap, and the array that represents the stack as its value
        }
        push(element) {
            let s = items.get(this); // By passing 'this', we are retrieving the value from the WeakMap 
            s.push(element);
        }
        pop() {
            let s = items.get(this);
            let r = s.pop();
            return r;
        }
    }

    return Stack;
})

class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
            this.items.push(element);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    clear() {
        items = [];
    }
    print() {
        console.log(items.toString());
        // OR: items.join(' ');
    }
}

module.exports = {
    Stack: Stack
}
