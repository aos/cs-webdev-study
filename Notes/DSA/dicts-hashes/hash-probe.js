// Linear probing
// When adding a new element, if position index is already occupied,
// We try index +1, repeat n+1

function HashTable() {

    // Hash function
    const hashCode = (key) => {
        let hash = 5381; // Initialize with prime number
        for (let i = 0; i < key.length; i++) {
            hash += hash * 33 + key.charCodeAt(i);
        }
        return hash % 1013;
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
            table[position] = new ValuePair(key, value);
        }
        else {
            let index = ++position;
            while (table[index] !== undefined) {
                index++;
            }
            table[index] = new ValuePair(key, value);
        }
    };

    this.remove = function(key) {
        const position = hashCode(key);

        if (table[position] !== undefined) {
            if (table[position].key === key) {
                table[position] = undefined;
                return true;
            }
            else {
                let index = ++position;
                while (table[index] === undefined ||
                    table[index].key !== key) {
                    index++;
                }
                if (table[index].key === key) {
                    table[index] = undefined;
                    return true;
                }
            }
        }

        return false;
    };

    this.get = function(key) {
        const position = hashCode(key);

        if (table[position] !== undefined) {
            if (table[position].key === key) {
                return table[position].value;
            } 
            else {
                let index = ++position;
                while (table[index] === undefined ||
                    table[index].key !== key) {
                    index++;
                }
                if (table[index].key === key) {
                    return table[index].value;
                }
            }
        }
        return undefined;
    };
};
