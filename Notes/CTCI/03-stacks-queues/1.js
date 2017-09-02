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

function MultiStackOffset(numStacks) {
  const mainArray = Array(numStacks);

  
}
stackOffset(1, 2, 3);
