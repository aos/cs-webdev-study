/** 2.4 - Partition
 *
 * Write code to partition a linked list around a value 'x',
 * such that all nodes less than 'x' come before all nodes
 * greater than or equal to 'x'. If 'x' is contained within
 * the list, the values of 'x' only need to be after the 
 * elements less than 'x'. The partition element 'x' can appear
 * anywhere in the "right partition"; it does not need to appear
 * between the left and right partition.
 *
 * Example:
 *
 * Input: 3->5->8->5->10->2->1 [partition = 5]
 * Output: 3->1->2->10->5->5->8
 */

const partition = (head, p) => {
  let current = head.next,
    previous = head;

  if (head === null) return;

  while (current !== null) {

    if (current.data < p) {
      // Skip over current
      previous.next = current.next;
      current.next = head;
      head = current;

      current = previous.next;
    } else {
      previous = current;
      current = current.next;
    }
  }

  // Head changes so head must be returned
  return head;
}

/* Solution 2: Incrementing head and tail */
const partition2 = (node, p) => {
  let node = head,
      tail = head;

  while (node !== null) {
    let next = node.next;
    if (node.data < p) {
      // Insert node at head
      node.next = head;
      head = node;
    }
    else {
      // Insert node at tail
      tail.next = node;
      tail = node;
    }
    node = next;
  }
  tail.next = null;

  // Head has changed, so return it
  return head;
}

const { LinkedList } = require('./list');
const MyList = new LinkedList();
const newList = MyList.appendToTail(3);
MyList.appendToTail(5);
MyList.appendToTail(8);
MyList.appendToTail(5);
MyList.appendToTail(10);
MyList.appendToTail(2);
MyList.appendToTail(3);

MyList.print();
partition(newList, 5);
MyList.print();
