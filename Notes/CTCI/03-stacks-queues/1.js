/** 3.1 - Three in One
 *
 * Describe how you could use a single array to implement three stacks.
 *
 * Solution 1:
 * Implement each stack with an offset into the array.
 * Use each stack size as an offset for the next stack. That way
 * when each stack increases in size, the next stack will use it
 * as its offset in the array.
 *
 * Solution 2:
 * Another way this can be implemented is to have alternating stacks.
 * When pushing and popping from each 'stack' use its 'frame #' to append
 * to array.
 *
 * Solution 3: 
 * Use a fixed stack size. Each stack occupies 'size / n' space in array, 
 * where 'n' is number of stacks.
*/

function FixedMultiStack() {
  const numStacks = 3;
  const stackCapacity = 3;
  const stacks = Array(numStacks).fill(0); // Stack pointer
  const values = Array(numStacks * stackCapacity);

  function getTop(stackNum) {
    return ((stackNum * stackCapacity) + stacks[stackNum]);
  }

  function isFull(stackNum) {
    return stacks[stackNum] === (stackCapacity - 1);
  }

  this.push = function (stackNum, value) {
    // Check if full
    if (isFull(stackNum)) {
      return false;
    } 
    // Use stack number and stack pointer as offset into values array
    const offset = getTop(stackNum); 

    values[offset] = value;
    // Update stack pointer
    stacks[stackNum]++;
    return true;
  }

  this.pop = function (stackNum) {
    const offset = getTop(stackNum); 
    const temp = values[offset]
    values[offset] = 0;
    stacks[stackNum]--;
    return temp;
  }

  this.peek = function (stackNum) {
    const offset = getTop(stackNum); 
    return values[offset];
  }

  this.isEmpty = function (stackNum) {
    return sizes[stackNum] === 0;
  }
}
