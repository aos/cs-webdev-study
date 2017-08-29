/** 2.5 - Sum Lists
 *
 * You have two numbers represented by a linked list, where 
 * each node contains a single digit. The digits are stored 
 * in ~reverse~ order, such that the 1's digit is the head
 * of the list. Write a function that adds the two numbers and
 * returns the sum as a linked list.
 *
 * Example: 
 * Input (7 -> 1 -> 6) + (5 -> 9 -> 2). 617 + 295
 * Output: 2 -> 1 -> 9. 912
 *
 * Suppose digits are stored in forward order?
 * Input: (6 -> 1 -> 7) + (2 -> 9 -> 5). 617 + 295
 * Output: 9 -> 1 -> 2. 912
*/

const LinkedList = require('./list');

const sumLists = (l1, l2) => {
  const MyList = new LinkedList();
  let newList;
  let p1 = l1;
  let p2 = l2;
  let carry = 0;

  while (p1 !== null || p2 !== null) {
    // Accounts for different sized lists
    let p1Val = (p1 ? p1.data : 0);
    let p2Val = (p2 ? p2.data : 0);

    let total = p1Val + p2Val + carry;
    let rem = total % 10;
    carry = Math.floor(total / 10);

    newList = MyList.appendToTail(rem);
    p1 = (p1 ? p1.next : null);
    p2 = (p2 ? p2.next : null);
  }

  if (carry !== 0) {
    newList = MyList.appendToTail(carry);
  }

  return (MyList.print(), newList)
}

const MyList = new LinkedList();

// Forward order lists:
/*
 * Suppose digits are stored in forward order?
 * Input: (6 -> 1 -> 7) + (2 -> 9 -> 5). 617 + 295
 * Output: 9 -> 1 -> 2. 912
 *
 * 1000: (1 -> 0 -> 0 -> 0)
 * 10:   (0 -> 0 -> 1 -> 0)
*/

const length = (list) => {
  let counter = 0;
  while (list !== null) {
    counter++;
    list = list.next;
  }
  return counter;
}

const padList = (list, num) => {
  let head = list;
  
  while (num > 0) {
      
  }
}

const sumForward = (l1, l2) => {
  let len1 = length(l1);
  let len2 = length(l2);

  if (len1 < len2) {
    l1 = padList(l1, len2 - len1);
  }
  else {
    l2 = padList(l2, len1 - len2);
  }

  while (l1 !== null || l2 !== null) {

  }


}

const ListOne = new LinkedList();
const ListTwo = new LinkedList();

let listUno = ListOne.appendToTail(7);
ListOne.appendToTail(1);
ListOne.appendToTail(6);

let listDos = ListTwo.appendToTail(5);
ListTwo.appendToTail(9);
ListTwo.appendToTail(2);

sumLists(listUno, listDos);

