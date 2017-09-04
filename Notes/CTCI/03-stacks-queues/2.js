/** 3.2 - Stack Min
 *
 * How would you design a stack which, in addition to 'push' and 'pop',
 * has a function 'min' which returns the minimum element?
 * 'Push', 'pop', and 'min' should all operate in O(1) time.
*/

function MinStack() {

  function StackNode(value, min = null) {
    this.value = value;
    this.min = min;
  }

  const stack = [];

  this.push = function (value) {
    if (stack.length === 0) {
      let node = new StackNode(value);
      // To allow self-referencing
      node.min = node;
      // Empty stack, first value is minimum - refer to itself 
      stack.push(node);
    } 
    else if (value < stack[stack.length - 1].value) {
      let node = new StackNode(value);
      node.min = node;
      // Value less than top of stack, refer to itself
      stack.push(node)
      return stack.length; 
    }
    else {
      // Value greater than top of stack, refer to the top's minimum pointer
      stack.push(new StackNode(value, stack[stack.length - 1].min));
      return stack.length;
    }
  }

  this.pop = function (value) {
    return stack.pop().value;
  }

  this.min = function() {
    return stack[stack.length - 1].min.value;
  }
}

const Stack = new MinStack();

Stack.push(3);
Stack.push(2);
Stack.push(4);
Stack.push(5);
Stack.push(1);

console.log(Stack.min()); // Should be '1'

Stack.pop();
console.log(Stack.min()); // Now '2'
