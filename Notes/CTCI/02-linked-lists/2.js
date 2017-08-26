/** 2.2 - Return Kth to Last
 *
 * Implement an algorithm to find the kth to last element
 * of a singly-linked list.
*/

const kth = (list, k) => {
  let counter = 0;
  let p1 = list;

  // Send a pointer to get list length
  while (p1 !== null) {
    p1 = p1.next;
    counter++;
  }

  if (k <= 0 || k > counter) return false;
  
  let diff = counter - k; 
  let local = 0;
  let p2 = list;

  while (p2.next !== null && local !== diff) {
    local++;
    p2 = p2.next;
  }

  return p2.data;
}

// Recursive:
const printKthToLast = (head, k) => {
  if (head === null) {
    return 0;
  }

  let index = printKthToLast(head.next, k) + 1;
  if (index === k) {
    console.log(`${k} to last node is ${head.data}`);
  }
  return index;
}

// Iterative:
// Use two pointers, place them `k` nodes apart. Move both pointers
// at the same pace, the first pointer will hit the end of the list 
// after LENGTH - k steps.
const nthToLast = (head, k) => {
  let p1 = head;
  let p2 = head;

  // Move p1 k nodes into list
  for (let i = 0; i < k; i++) {
    if (p1 === null) return null;
    p1 = p1.next;
  }

  // Move them at the same pace. When p1 hits the end,
  // p2 will be at the right element.
  while (p1 !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p2.data;
}

const LinkedList = require('./list');

const newList = new LinkedList();
const myList = newList.appendToTail(5);
newList.appendToTail(6);
newList.appendToTail(7);
newList.appendToTail(8);
newList.appendToTail(9);
newList.appendToTail(10);

newList.print();
newList.size();

console.log(kth(myList, 1));
printKthToLast(myList, 1);
console.log(nthToLast(myList, 1));
