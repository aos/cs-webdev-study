/** 2.8 - Loop Detection
 *
 * Given a circular linked list, implement an algorithm that returns
 * the node at the ~beginning of the loop~.
 *
 * EXAMPLE
 * Input: A -> B -> C -> D -> E -> C (same C)
 * Output: C
*/

const detectLoop = (head) => {
  let slow = head;
  let fast = head;

  // Find meeting point. This will be 'LOOP_SIZE - k' steps into LL
  while (fast !== null & fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) { // Collision
      break;
    }
  }

  // Error check - no meeting point, and therefore no loop
  if (fast === null || fast.next === null) {
    return null
  }

  /* Move 'slow' to head. Keep 'fast' at meeting point. Each are 'k' steps
   * from the loop start. If they move at the same pace, they must meet
   * at loop start. */
  slow = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  // Both now at start of loop
  return fast;
}
