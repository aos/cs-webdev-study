// Sets - collection of items that are unordered and consist of unique elements

function SetI() {
    let items = {};

    this.has = function(value) {
        return items.hasOwnProperty(value); 
    };

    this.add = function(value) {
        if (!this.has(value)) {
            items[value] = value;
            return true;
        }
        return false;
    };

    this.delete = function(value) {
        if (this.has(value)) {
            delete items[value];
            return true;
        }
        return false;
    };

    this.clear = function() {
        items = {};
    }

    this.size = function() {
        return Object.keys(items).length;
    }
    
    this.values = function() {
        let values = [];
        for (let i = 0, keys = Object.keys(items); i < keys.length; i++) {
            values.push(items[keys[i]]);
        }
        return values;
    }

// Set operations:
// - Union: given two sets, return a new set with elements from both sets
// - Intersection: given two sets, return a new set with elements that `exist`
//                  in both sets
// - Difference: given two sets, return a new set with all element that exist
//                  in first set, but NOT in second set
// - Subset: confirm whether a given set is a subset of another set
        
    this.union = function(otherSet) {
        let unionSet = new SetI();
        
        let values = this.values(); // Returns an array of all values
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }

        values = otherSet.values(); // Returns other set values
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }

        return unionSet;
    };

    this.intersection = function(otherSet) {
        let intersectionSet = new SetI();

        let values = this.values(); // Returns an array of all values in set

        for (let i = 0; i < values.length; i++) {
            // Check to see if both sets have the value
            if (otherSet.has(values[i])) {
                intersectionSet.add(values[i]);
            }
        }

        return intersectionSet;
    };

    this.difference = function(otherSet) {
        let differenceSet = new SetI();

        let values = this.values();
        // Check if other set has value
        if (!otherSet.has(values[i])) {
            differenceSet.add(values[i]);
        }
    };

    this.subset = function(otherSet) {
        if (this.size() > otherSet.size()) {
            return false;
        }
        else {
            let values = this.values();

            for (let i = 0; i < values.length; i++) {
                // If not found in other set, cannot be a subset
                if (!otherSet.has(values[i])) {
                    return false;
                }
            }
            return true;
        }
    }
}

// ES6 Sets and simulating operations

// == Union:
let unionAb = new Set();

// Iterate through set and add to created
for (let x of setA) unionAb.add(x); 
for (let x of setB) unionAb.add(x);

// == Intersection:
let nativeIntersection = function(setA, setB) {
    let intersectionSet = new Set();
    for (let x of setA) {
        if (setB.has(x)) {
            intersectionSet.add(x);
        }
    }
    return intersectionSet;
}

let intersectionAB = nativeIntersection(setA, setB);

// == Difference:
let nativeDifference = function(setA, setB) {
    let differenceSet = new Set();
    for (let x of setA) {
        if (!setB.has(x)) {
            differenceSet.add(x);
        }
    }
    return differenceSet;
}

let differenceAB = nativeDifference(setA, setB);


