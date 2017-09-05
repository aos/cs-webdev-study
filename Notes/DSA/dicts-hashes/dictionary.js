// Dictionary data structure (aka map)

// Stores [key, value] collection of elements

module.exports = function Dictionary() {
    let items = {};

    this.set = function(key, value) {
        items[key] = value;
    };

    this.delete = function(key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    };

    this.has = function(key) {
        return items.hasOwnProperty(key);
    };

    this.get = function(key) {
        return this.has(key) ? items[key] : undefined;
    };

    this.values = function() {
        let values = [];
        for (const key in items) {
            // 'for...in' also enumerates over prototype chain methods
            if (this.has(key)) {
                values.push(items[key]);
            }
        } 
        return values;
    };

    this.clear = function() {
        items = {};
    };

    this.size = function() {
        return Object.keys(items).length;
    }
    this.keys = function() {
        return Object.keys(items);
    };
}
