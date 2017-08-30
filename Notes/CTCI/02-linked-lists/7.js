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
  return null;
}

const length = (l1) => {
  counter = 0;
  while (l1 !== null) {
    counter++;
    l1 = l1.next;
  }
  return {
    counter,
    l1;
  }
}

// Without hash table
const intsec = (l1, l2) => {
  let { counter: len1 } = length(l1);
  let { counter: len2 } = length(l2);
  let diff = Math.abs(len1 - len2);
  
  if (diff === 0) {
    while (l1 !== null && l2 !== null) {
      if (l1 === l2) {
        return l1;
      }
      l1 = l1.next;
      l2 = l2.next;
    }
    return null;
  } 
  else {
    let longList = len1 > len2 ? l1 : l2;
    let p2 = (longList === l1 ? l2 : l1);
    while (diff > 0) {
      longList = longList.next;
      diff--;
    }
    while (longList !== null) {
      if (longList === p2) {
        return longList;
      }
      longList = longList.next;
      p2 = p2.next;
    }
    return null;
  }
}

const CTCIintersection = (l1, l2) => {
  // Get size and tail
  let result1 = length(l1);
  let result2 = length(l2);
  let diff = Math.abs(result1.counter - result2.counter);

  // If different tail nodes, no intersection
  if (result1.l1 !== result2.l1) {
    return null;
  }

  // Set pointers to start of each linked list
  let shorter = result1.counter < result2.counter ? l1 : l2;
  let longer = result1.counter < result2.counter ? l2 : l1;

  while (diff > 0) {
    longer = longList.next;
    diff--;
  }

  while (shorter !== longer) {
    shorter = shorter.next;
    longer = longer.next;
  }

  return longer;
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
console.log(intsec(listOne, listTwo));
