/** 2.6 - Palindrome
 *
 * Implement a function to check if a linked list is a palindrome.
*/

// Using an array buffer
const isPal = (list) => {
  const buff = [];

  while (list !== null) {
    buff.push(list.data);
    list = list.next;
  }

  let len = buff.length;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (buff[i] !== buff[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

const palTwo = (list) => {
  let counter = 0;
  let p1 = list;
  let p2 = list.next;

  // Get list length
  while (p1 != null) {
    p1 = p1.next;
    counter++;
  }

  // Reset first pointer
  p1 = list;

  while (p1 !== null && counter > 0) {
  let counter2 = 0;

    // Run second pointer to comparison node (other side) 
    while (p2.next !== null && counter2 < counter) {
      p2 = p2.next;
      counter2++;
    }

    if (p1.data !== p2.data) {
      return false;
    }

    p1 = p1.next;
    p2 = p1.next;
    counter = counter2 - 2;
  }

  return true;
}

// Iterative approach: Fast and slow runner using a stack
const palThree = (list) => {
  let fast = list;
  let slow = list;

  const stack = [];

  /* Push elements from first half of linked list onto stack. 
  When fast runner (which is moving at 2x speed) reaches end
  of linked list, then we know we're at the middle */
  while (fast !== null && fast.next !== null) {
    stack.push(slow.data);
    slow = slow.next;
    fast = fast.next.next;
  }

  // Has odd # of elements, so skip middle
  if (fast !== null) {
    slow = slow.next;
  }

  while (slow !== null) {
    let top = stack.pop();

    // If values are different -- not a palindrome
    if (top !== slow.data) {
      return false;
    }
    slow = slow.next;
  }
  return true;
}

const { LinkedList, LinkedListNode } = require('./list');
const AnotherList = new LinkedList();

// Reverse a linked list:
const reverse = (node) => {
  let head = null;

  while (node !== null) {
    let n = new LinkedListNode(node.data);
    n.next = head;
    head = n;
    node = node.next;
  }
  return head;
}

const MyList = new LinkedList();
let newList = MyList.appendToTail('r');
MyList.appendToTail('a');
MyList.appendToTail('c');
MyList.appendToTail('e');
MyList.appendToTail('t');
MyList.appendToTail('u');
MyList.appendToTail('n');

MyList.print();
console.log(isPal(newList));
console.log(palTwo(newList));
console.log(reverse(newList));
