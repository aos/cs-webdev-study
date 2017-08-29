/** 2.7 - Intersection
 *
 * Given two (singly) linked lists, determine if the two lists intersect.
 * Return the intersecting node. Note that the intersection is defined 
 * on reference, not value. That is, if the 'kth' node of the first
 * linked list is the exact same node (by reference) as the 'jth' node
 * of the second linked list, then they are intersecting.
*/

// Using hash table
const intersection = (l1, l2) => {
  const map = new Map(); 
  let p1 = l1,
      p2 = l2;

  while (p1 !== null) {
    map.set(p1, p1.data);
    p1 = p1.next;
  }

  while (p2 !== null) {
    if (map.has(p2)) {
      return p2;
    }
    p2 = p2.next;
  }
  return false;
}

const { LinkedListNode } = require('./list');
let common = new LinkedListNode(9);
common.next = new LinkedListNode(10);
common.next.next = new LinkedListNode(20);

let listOne = new LinkedListNode(3);
listOne.next = new LinkedListNode(4);
listOne.next.next = new LinkedListNode(5);
listOne.next.next.next = new LinkedListNode(6);
listOne.next.next.next.next = common;

let listTwo = new LinkedListNode(1);
listTwo.next = new LinkedListNode(2);
listTwo.next.next = common;

console.log(intersection(listOne, listTwo));
