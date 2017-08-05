// Hash table in JS

module.exports = function HashTable() {

    // Hash function
    const hashCode = (key) => {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }

    return hash % 37;
    }

    const table = [];

    this.put = function(key, value) {
        const position = hashCode(key);
        console.log(`${position} - ${key}`);
        table[position] = value;
    };

    this.remove = function(key) {
        table[hashCode(key)] = undefined;
    };

    this.get = function(key) {
        return table[hashCode(key)];
    };

}

/* const hash = new HashTable();

hash.put('Aos', 'Hoooooo');
hash.put('Lou', 'Meow');
hash.put('Phin', 'Rawr');

console.log(hash.get('Aos'));
console.log(hash.get('Lou'));
console.log(hash.get('Phin'));
hash.remove('Aos');
console.log(hash.get('Aos'));

*/
