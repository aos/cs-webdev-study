// Decimal to binary problem

// To convert decimal to binary
// Divide number by 2 until division result is 0
// Using the remainder to represent '1'

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

function divideBy2(decNumber) {
    
    const remStack = new Stack();
    let rem, binaryString = '';

    while (decNumber > 0) {
        rem = Math.floor(decNumber % 2); // Calculate remainder
        remStack.push(rem); // push remainder onto stack
        decNumber = Math.floor(decNumber / 2); // Divide number for next value
    }

    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }

    return binaryString;
}

console.log("8:", divideBy2(8));
console.log("256:", divideBy2(256));
console.log("512:", divideBy2(512));
console.log("1333:", divideBy2(1333));
