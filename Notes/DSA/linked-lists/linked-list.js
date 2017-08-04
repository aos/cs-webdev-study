// Linked list implementation

function LinkedList() {
    const Node = function(element) {
        this.element = element;
        this.next = null;
    };

    let length = 0;
    let head = null;

    this.append = function(element) {
        let node = new Node(element),
            current; // Traversal pointer

        // First node on the list
        if (head === null) { 
            head = node;
        }
        else {
            current = head; 
            
            // Loop list until find last item
            while (current.next) {
                current = current.next;
            }

            // Get last item and assign 'next' to node to make the link
            current.next = node;
        }

        length++; // Update size of list
    };

    this.insert = function(position, element) {
        if (position >= 0 && position <= length) {
            let node = new Node(element),
                current = head,
                previous,
                index = 0;

            if (position === 0) {
                node.next = current;
                head = node;
            }
            else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }

            length++; // Update size of list
            
            return true;
        }
        else {
            return false;
        }
    };

    this.removeAt = function(position) {
        // Check for out-of-bounds values
        if (position > -1 && position < length) {
            let current = head,
                previous,
                index = 0;

            // Removing first item
            if (position === 0) {
                head = current.next;
            }
            else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }

                length --;

                // Link previous with current's next: Skip it to remove
                previous.next = current.next;

                return current.element;
            }
        }
        else {
            return null;
        }
    };

    this.indexOf = function(element) {
        let current = head,
            index = -1;

        while (current) {
            if (element === current.element) {
                return index;
            }

            index++;
            current = current.next;
        }

        return -1;
    };

    this.isEmpty = function() {
        return length === 0;
    };

    this.size = function() {
        return length;
    };

    this.toString = function() {
        let current = head,
            string = '';

        while (current) {
            string += current.element + (current.next ? 'n' : '');
            current = current.next;
        }
        return string;
    };

    this.getHead = function() {
        return head;
    };
}

// Doubly linked list

function DoublyLinkedList() {
    let Node = function(element) {
        this.element = element;
        this.next = null
        this.prev = null;
    }

    let length = 0;
    let head = null;
    let tail = null;

    this.insert = function(position, element) {

        // Check for out-of-bounds
        if (position >= 0 && position <= length) {
            let node = new Node(element),
                current = head,
                previous,
                index = 0;

            if (position === 0) {
                if (!head) {
                    head = node;
                    tail = node;
                }
                else {
                    node.next = current;
                    current.prev = node;
                    head = node;
                }
            }
            else if (position === length) {
                current = tail;
                current.next = node;
                node.prev = current;
                tail = node;
            }
            else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;

                current.prev = node;
                node.prev = previous;
            }

            length++;

            return true;
        }
        else {
            return false;
        }
    };

    this.removeAt = function(position) {
        // Look for out-of-bounds
        if (position >= 0 && position < length) {
            let current = head,
                previous,
                index = 0;

            // Removing first item
            if (position === 0) {
                head = current.next;

                // If there is only one item, update tail
                if (length === 1) {
                    tail = null;
                }
                else {
                    head.prev = null;
                }
            }
            else if (position === length - 1) { // Last item
                current = tail;
                tail = current.prev;
                tail.next = null;
            }
            else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }

                // Link previous with current's next - skip it
                previous.next = current.next;
                current.next.prev = previous;
            }

            length--;

            return current.element;
        }
        else {
            return null;
        }
    }
};

// Circular linked lists


