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

  while (p1 !== null) {
  let counter2 = 0;

    while (p2.next !== null && counter <= counter2) {
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

const LinkedList = require('./list');
const MyList = new LinkedList();

let newList = MyList.appendToTail('r');
MyList.appendToTail('a');
MyList.appendToTail('t');
MyList.appendToTail('d');
MyList.appendToTail('t');
MyList.appendToTail('a');
MyList.appendToTail('r');

MyList.print();
console.log(isPal(newList));
