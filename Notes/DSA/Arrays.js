/**
 * Arrays
**/

// Methods:

// Add to END of array
numbers.push(11);

// Add to BEGINNING of array
numbers.unshift(-2);

// Remove from END of array
numbers.pop(11);

// Remove from BEGINNING of array
numbers.shift(-2);

// Remove from specific position
numbers.splice(5, 3) // (position, # of elements to delete)

// Splice also allows you to add elements to array, any argument after second:
numbers.splice(5, 3, 2, 3, 4) // Adds [2, 3, 4]

// Multi-dimentional arrays
let matrix3x3x3 = [];
for (let i = 0; i < 3; i++) {
  matrix3x3x3[i] = [];
  for (let j = 0; j < 3; j++) {
    matrix3x3x3[i][j] = [];
    for (let z = 0; z < 3; z++) {
      matrix3x3x3[i][j][z] = i + j + z;
    }
  }
}

// Array iteration

// Consider function which checks for even numbers
let isEven = (x) => (x % 2 == 0);

// Every method - iterates thru each element of array until the return function is false
numbers.every(isEven); 

// Some method = iterates thru each element of array until return function is true
numbers.some(isEven);

// Iterator methods:
let iterator = numbers[Symbol.iterator]();
console.log(iterator.next().value); // 1

// entries() - retrieves iterator of key/value
let aEntries = numbers.entries();
console.log(aEntries.next().value); // [0, 1] - position 0, value 1

// keys() -- returns @@iterator which contains keys of the array
let aKeys = numbers.keys();
console.log(aKeys.next()); // {value: 0, done: false}

// values() -- returns @@iterator which contains values of array
let aValues = numbers.values();
console.log(aValues.next()); // {value: 1, done: false}

// Array.from -- creates a new array from an existing one, can also pass a callback function that maps to array
let evens = Array.from(numbers, x => (x % 2 == 0));

// Array.of -- creates a new array from the arguments passed to the method
let numbers3 = Array.of(1, 2, 3); // [1, 2, 3]
let numbers4 = Array.of(...numbers);

// copyWithin() -- copies a sequence of values of the array into the position of a start index
let copyArray = [1, 2, 3, 4, 5, 6]

copyArray.copyWithin(0, 3); // [4, 5, 6, 4, 5, 6]
copyArray.copyWithin(1, 3, 5); // [1, 4, 5, 4, 5, 6]

// Sorting:

// sort() -- lexographic comparison, can be passed in a callback function that needs to return either '1' (correct order), or '-1' (incorrect order, switch)

// Consider:
let friends = [
  {name: 'John', age: 30},
  {name: 'Ana', age: 20},
  {name: 'Chris', age: 25}
];

function comparePerson(a, b) {
  if (a.age < b.age) {
    return -1;
  }
  if (a.age > b.age) {
    return 1;
  }
  return 0;
}

friends.sort(comparePerson);