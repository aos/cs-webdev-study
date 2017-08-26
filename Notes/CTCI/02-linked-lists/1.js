/** 2.1 - Remove Dups
 *
 * Write code to remove duplicates from an unsorted linked list.
 *
 * FOLLOW-UP:
 * How would you solve this problem if a temporary buffer is not allowed?
*/

const LinkedList = require('./list');

const removeDups = (list) => {
  // Using temporary buffer
  let buffer = [];
  let p1 = list;
  let previous = null;
  
  while (p1 !== null) {
    if (buffer.indexOf(p1.data) > -1) {
      // Remove duplicate node by detaching it
      previous.next = p1.next;
    }
    else {
      previous = p1;
      buffer.push(p1.data);
    }
    p1 = p1.next;
  }
}

const removeDupsNoBuf = (list) => {
  
  if (list === null) {
    return;
  }

  // No temporary buffer
  let head = list;
  let pData = head.data; 
  let p1 = head;

  while (p1.next !== null) {
    if (pData === p1.next.data) {
      p1.next = p1.next.next;
    } else {
      p1 = p1.next; 
    }
  }
  return removeDupsNoBuf(head.next);
}

let myList = new LinkedList();

let newList = myList.appendToTail(3);
myList.appendToTail(5);
myList.appendToTail(8);
myList.appendToTail(5);
myList.appendToTail(7);
myList.appendToTail(5);

myList.print();

removeDupsNoBuf(newList);

myList.print();
