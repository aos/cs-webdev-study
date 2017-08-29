/** 2.8 - Loop Detection
 *
 * Given a circular linked list, implement an algorithm that returns
 * the node at the beginning of the loop.
 *
 * EXAMPLE
 * Input: A -> B -> C -> D -> E -> C (same C)
 * Output: C
*/

const detectLoop = (node) => {
  let p1 = node;
  let p2 = node.next.next;

  while (p1.data !== p2.data) {
    p1 = p1.next;
    p2 = p2.next.next;
  }

  return p1.data;
}
