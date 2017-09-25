/** 3.5 -- Sort Stack
 *
 * Write a program to sort a stack such that the smallest items are on the top.
 * You can use an additional temporary stack, but you may not copy the elements
 * into any other data strcuture (such as an array). The stack supports the
 * following operations: 'push', 'pop', 'peek', 'isEmpty'.
*/

const Stack = require('./stack');

function sortStack(stack) {
  
  if (stack == null || stack.isEmpty()) return stack;

  const tempStack = new Stack();
  tempStack.push(stack.pop());
  
  while (!stack.isEmpty()) {
    let temp = stack.pop();

    while (!tempStack.isEmpty() && temp > tempStack.peek()) {
      stack.push(tempStack.pop());
    }

    tempStack.push(temp);
  }

  return tempStack;
}
