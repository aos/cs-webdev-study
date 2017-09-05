function LinkedList() {
  const Node = function(data) {
    this.data = data;
    this.next = null;
  }

  let head = null;
  let length = 0;

  this.appendToTail = function(data) {
    const node = new Node(data);
    let current;

    if (head === null) {
      head = node;
    }
    else {
      current = head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    length++;
    return head;
  }

  this.deleteNode = function(data) {
    // Remove head
    if (head.data === data) {
      head = head.next;
      length--;
      return head;
    }

    let current = head;

    while (current.next !== null) {
      if (current.next.data === data) {

        current.next = current.next.next;
        length--;
        return true;
      }
      current = current.next;
    }
    return false;
  }

  this.print = function() {
    let current = head;
    let list = [];

    while (current) {
      list.push(current.data);
      current = current.next;
    }
    return console.log(list);
  }

  this.size = function() {
    console.log("Size:", length);
    return length;
  }
}

function LinkedListNode(data) {
  this.data = data;
  this.next = null;
}

module.exports = {
  LinkedList : LinkedList,
  LinkedListNode : LinkedListNode
}
