/** 2.3 - Delete Middle Node
 *
 * Implement an algorithm to delete a node in the middle
 * (i.e., any node but the first and last node, not necessarily
 * the exact middle) of a singly-linked list, given only access to that node.
 *
 * Example:
 * Input: the node `c` from the linked list: a->b->c->d->e->f
 * Result: Nothing is returned, but new list: a->b->d->e->f
*/

const deleteMidNode = (node) => {

  // Prevent deletion of last node
  if (node.next === null || node === null) return false;

  let next = node.next;
  node.data = next.data;
  node.next = next.next;

  return true;
}

const LinkedList = require('./list');
const myList = new LinkedList();

let list = myList.appendToTail(2);
myList.appendToTail(3);
myList.appendToTail(4);
myList.appendToTail(5);
myList.appendToTail(6);
myList.appendToTail(7);

myList.print();

list = list.next.next; // Node #3

console.log(list);
deleteMidNode(list);

myList.print();
