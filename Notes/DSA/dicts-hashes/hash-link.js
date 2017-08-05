const LinkedList = require('../linked-lists/linked-list');

function HashTable() {

    // Hash function
    const hashCode = (key) => {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
    return hash % 37;
    }

    // Element instance object
    const ValuePair = function(key, value) {
        this.key = key;
        this.value = value;

        this.toString = function() {
            return `[${this.key} - ${this.value}]`;
        }
    }
    
    // Hash table
    const table = [];

    this.put = function(key, value) {
        const position = hashCode(key);
        if (table[position] === undefined) {
            table[position] = new LinkedList();
        }
        table[position].append(new ValuePair(key, value));
    };

    this.remove = function(key) {
        const position = hashCode(key);

        if (table[position] !== undefined) {
            let current = table[position].getHead();

            while (current.next) {
                if (current.element.key === key) {
                    table[position].remove(current.element);
                    if (table[position].isEmpty()) {
                        table[position] = undefined;
                    }
                    return true;
                }
                current = current.next; 
            }

            // Check in case first or last element
            if (current.element.key === key) {
                table[position].remove(current.element);
                if (table[position].isEmpty()) {
                    table[position] = undefined;
                }
                return true;
            }
        }
        return false;
    };

    this.get = function(key) {
        const position = hashCode(key);

        if (table[position] !== undefined) {
            
            // Iterate linked list to find key/value
            let current = table[position].getHead();

            while (current.next) {
                if (current.element.key === key) {
                    return current.element.value;
                }
                current = current.next;
            }

            // Check in case first (and only) or last element
            if (current.element.key === key) {
                return current.element.value;
            }
        }
        return undefined;
    };
}
