/** 3.4 -- Queue via Stacks
 *
 * Implement a MyQueue class which implements a queue using two stacks.
*/

function MyQueue() {
  const stackPush = [];
  const stackGrab = []; // Reverse of stack

  this.enqueue = function(value) {
    stackPush.push(value);
    // Update second stack 
    for (let i = stackPush.length - 1; i <= 0; i--) {
      stackGrab.push(stackPush[i]); 
    }
    return stackPush.length;
  }

  this.dequeue = function() {
    if (stackGrab.length === 0) return null;
    return stackGrab.pop(); 
  }

  this.peek = function() {
    return stackGrab[stackGrab.length - 1];
  }

  this.isEmpty = function() {
    return stackGrab.length === 0;
  }
}
