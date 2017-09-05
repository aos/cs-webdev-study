/** 3.3 -- Stack of Plates
 *
 * Imagine a (literal) stack of plates. If the stack gets too high,
 * it might topple. Therefore, in real life, we would likely start
 * a new stack when the previous stack exceeds some threshold.
 * Implement a data structure 'SetOfStacks' that mimics this.
 * 'SetOfStacks' should be composed of several stacks and should create
 * a new stack once the previous one exceeds capacity.
 *
 * 'SetOfStacks.push()' and 'SetOfStacks.pop()' should behave identically
 * to a single stack.
 *
 * Follow-up:
 * Implement a function 'popAt(index)' which performs a pop operation on
 * a specific sub-stack.
*/

function SetOfStacks() {
  const capacity = 5,
        stacks = [[]];
  let stackPointer = 0,
      pointed = false;

  this.push = function(value) {
    
    // Popping at specific substack changes capacity
    // Run through stacks and find non-full stack
    if (pointed) {
      let newPoint = 0;
      while (stacks[newPoint].length === capacity) {
        newPoint++;
      }
      stackPointer = newPoint;
    }

    if (stacks[stackPointer].length < capacity) {
      stacks[stackPointer].push(value);
      return stacks[stackPointer].length;
    }
    else {
      // Create new stack
      const newStack = [];
      newStack.push(value);

      // Update stack pointer
      stackPointer++;
      stacks.push(newStack);
      return stacks[stackPointer].length;
    }
  }

  this.pop = function() {
    const val = stacks[stackPointer].pop();

    // Last element of stack? Go back to previous stack
    if (stacks[stackPointer].length === 0) {
      stackPointer--;
    }

    return val;
  }

  this.peek = function() {
    return stacks[stackPointer][stacks[stackPointer].length - 1];
  }

  // Given a specific sub-stack
  this.popAt = function(index) {
    pointed = true;
    const val = stacks[index].pop();

    return val;
  }
}
