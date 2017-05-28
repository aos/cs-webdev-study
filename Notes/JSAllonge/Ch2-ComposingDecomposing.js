/**
 * Chapter 2 - Composing and Decomposing Data
**/

/**
 * Arrays and Destructuring Arguments
**/

// Arrays store references to things you put in them
const x = [],
      a = [x];
a[0] === x; // true

// Wrap an array literal:
const wrap = (something) => {
  const wrapped = [something];
  return wrapped;
}
wrap("package"); // ["package"]

// Reverse the statement using destructuring:
const unwrap = (wrapped) => {
  const [something] = wrapped; // destructures array
  return something;
}
unwrap(["present"]); // "present"

// More than one element:
var surname = (name) => {
  const [first, last] = name;
  return last;
}
surname(["Aos", "Dabbagh"]); // "Dabbagh"

// Nesting destructuring
const description = (nameAndOccupation) => {
  const [[first, last], occupation] = nameAndOccupation;
  return `${first} is a ${occupation}`;
}
description([["Aos", "Dabbagh"], "programmer"]);
// Aos is a programmer

// Gathering
var [car, ...cdr] = [1, 2, 3, 4, 5];
car; // 1
cdr; // [2, 3, 4, 5]

// `...` does not provide universal pattern-matching capability (unable to do it in the beginning or the middle)

// `...` as spread operator:
const oneTwoThree = ["one", "two", "three"];
["zero", ...oneTwoThree]; // ["zero", "one", "two", "three"]

// JavaScript does not pattern match:
const [what] = [];
what; // undefined
const [which, why, who] = ["duck feet", "tiger tail"];
console.log(which, why, who); // "duck feet", "tiger tail", undefined

// If no items to assign with `...`, JS assigns empty array:
const [...they] = [];
they; // undefined
const [where, when, ...how] = ["duck feet", "tiger"];
how; // undefined

// Destructuring and return values (return multiple things with destructuring)
const descriptionTwo = (nameAndOccupation) => {
  if (nameAndOccupation.length < 2) {
    return ["", "occupation missing"]
  }
  else {
    const [[first, last], occupation] = nameAndOccupation;
    return [`${first} is a ${occupation}`, "ok"];
  }
}
const [reg, status] = descriptionTwo([["Aos", "Dabbagh"], "programmer"])
reg; // "Aos is a programmer"
status; // "ok"

// Destructuring parameters
const numbers = (...nums) => nums; // Gathering parameters
numbers(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]

/**
 * Self-Similarity
**/

// List (two rules):
// 1. Empty, or;
// 2. Consists of an element concatenated with a list
[]; // empty
["baz", ...[]]; // ["baz"]
["bar", ...["baz"]]; // ["bar", "baz"]
["foo", ...["bar", "baz"]]; // ["foo", "bar", "baz"]

// Decomposing lists works the same way:
const [first, ...rest] = ["foo", "bar"];
first; // "foo"
rest; // ["bar"]

// Empty list:
const isEmpty = ([first, ...rest]) => first === undefined;

isEmpty([]); // true
isEmpty([0]); // false
isEmpty([[]]); // false

// Writing an array length function
const length = ([first, ...rest]) =>
  first === undefined
    ? 0 // Terminal case (array.length = 0)
    : 1 + length(rest); // recursively call `length(..)`

length([]); // 0
length(["foo"]); // 1
length(["foo", "bar", "baz"]); // 3

// Recursively flatten an array:
const flatten = ([first, ...rest]) => {
  if (first === undefined) {
    return [];
  }
  else if (!Array.isArray(first)) {
    return [first, ...flatten(rest)];
  }
  else {
    return [...flatten(first), ...flatten(rest)];
  }
}

// `...flatten(rest)` is equal to the return value of flatten spread into an array
// Example: function returnArray() {
//   return [1, 2, 3];
// }
// var test = [0, ...returnArray()];
// => [0, 1, 2, 3]

// Mapping
const squareAll = ([first, ...rest]) => 
  first === undefined
    ? []
    : [first * first, ...squareAll(rest)]

squareAll([1, 2, 3, 4]); // [1, 4, 9, 16]

// If we wanted to truthify:
const truthyAll = ([first, ...last]) =>
  first === undefined
    ? []
    : [!!first, ...truthyAll(rest)]

// Extract the thing to do with each element
// Start with signature:
var mapWith = (fn, array) => {/* */}

// Using ternary operator
var mapWith = (fn, [first, ...last]) =>
  first === undefined
    ? []
    : [fn(first), ...mapWith(fn, rest)];

mapWith((x) => x * x, [1, 2, 3]); // [1, 4, 9]
mapWith((x) => !!x, [null, true, 25, "foo"]); // [false, true, true, true]

// Using folding, to sum squares
const sumSquares = ([first, ...rest]) =>
  first === undefined
    ? 0
    : first * first + sumSquares(rest)

sumSquares([1, 2, 3, 4, 5]); // 55

// Re-writing mapWith to sum squares:
const foldWith = (fn, terminalValue, [first, ...rest]) =>
  first === undefined
    ? terminalValue
    : fn(first, foldWith(fn, terminalValue, rest));

// squareAll => folded
foldWith((first, rest) => first * first + rest, 0, [1, 2, 3, 4, 5])

// Abstract one more level, extracting array:
const squareAllFold = (array) => foldWith((first, rest) => [first * first, ...rest], [], array);

// Re-write `mapWith` using `foldWith`:
var mapWith = (fn, array) => foldWith((first, rest) => 
  [fn(first), ...rest], [], array)
var squareAllMap = (array) => mapWith((x) => x * x, array);

// Re-write length
var lengthFold = (array) => foldWith((first, rest) => 1 + rest, 0, array);
lengthFold([1, 2, 3, 4, 5]); // 5

/**
 * Tail Calls (and Default Arguments) (Tail Call Optimization [TCO])
**/
// Occurs when a function's last act is to invoke another function
// Consider:
var lengthAgain = ([first, ...rest]) =>
  first === undefined
    ? 0
    : 1 + lengthAgain(rest);
// This is not TC optimized as it has to add one before returning
// Converting length to TCO
const lengthDelaysWork = ([first, ...rest], numberToBeAdded) => 
    first === undefined
      ? numberToBeAdded
      : lengthDelaysWork(rest, 1 + numberToBeAdded)

var lengthAgain = (n) => lengthDelaysWork(n ,0);

// Using partial application
var callLast = (fn, ...args) => 
  (...remainingArgs) =>
    fn(...remainingArgs, ...args);

var lengthPartial = callLast(lengthDelaysWork, 0);
lengthPartial(["foo", "bar", "baz"]); // 3

// Using the technique with `mapWith`
const mapWithDelaysWork = (fn, [first, ...rest], prepend) =>
  first === undefined
    ? prepend
    : mapWithDelaysWork(fn, rest, [...prepend, fn(first)]);

mapWith = callLast(mapWithDelaysWork, []);
mapWith((x) => x * x, [1, 2, 3, 4, 5]); 

// Factorials with TCO
const factorialWithDelayedWork = (n, work) => 
  n === 1
  ? work
  : factorialWithDelayedWork(n - 1, n * work);

var factorial = (n) => factorialWithDelayedWork(n, 1);

// Default argument
var factorial = (n, work = 1) =>
  n === 1
  ? work
  : factorial(n - 1, n * work);

factorial(1); // 1
factorial(6); // 720

// Default destructuring assignment
var [firstAgain, second = "two"] = ["one"]
`${first} . ${second}`; // "one . two"
var [firstAgain, second = "two"] = ["one", "three"]
`${first} . ${second}`; // "one . three"

/**
 * Garbage, Garbage Everywhere
**/

// JS scheme of two-element arrays to represent cons cells:
var cons = (a, d) => [a, d],
    car = ([a, d]) => a,
    cdr = ([a, d]) => d;

// Make a list by calling cons repeatedly, and terminating with null:
const oneToFive = cons(1, cons(2, cons(3, cons(4, cons(5, null)))))
oneToFive; // [1, [2, [3, [4, [5, null]]]]]

// Arrays refer to each other with references
// Creating a linked list
const node5 = [5, null],
      node4 = [4, node5], 
      node3 = [3, node4],
      node2 = [2, node3],
      node1 = [1, node2];

const oneToFiveAgain = node1; // Node 1 links to every other list

// If we want the head of a list, we call `car(..)` on it:
car(oneToFiveAgain); // 1

// Calling the rest:
cdr(oneToFiveAgain); // [2, [3, [4, [5, null]]]]

// Secret decoder ring:
const SecretDecoderRing = {
  encode: function(plaintext) {
    return plaintext
      .split('')
      .map(char => char.charCodeAt())
      .map(code => code + 1)
      .map(code => String.fromCharCode(code))
      .join('');
  },
  decode: function(cypertext) {
    return cypertext
      .split('')
      .map(char => char.charCodeAt())
      .map(code => String.fromCharCode(code))
      .join('');
  }
}

// Destructuring objects:
// Consider:
const user = {
  name: {
    first: "Aos",
    last: "Dabbagh"
  },
  occupation: {
    title: "Programmer",
    responsibilities: ["Code", "code more"]
  }
};
user.name.first; // "Aos"

// Destructured:
var {name: {first: given, last: surname}, occupation: {title: title,}} = user;

last; // "Dabbagh"
title; // "Programmer"

// Destructure function parameters
const descriptor = ({name: {first: given}, occupation: {title: title}}) => `${given} is a ${title}`;
descriptor(user); // "Aos is a Programmer"

// Shorthand labeling:
const abbrev = ({name: {first, last}, occupation: {title}})
=> { return {first, last, title} }

abbrev(user); // {"first": "Aos", "last": "Dabbagh", "title": "Programmer"}

// Linked lists from objects
const EMPTY = {};
const OneTwoFour = {first: 1, rest: {first: 2, rest: {first: 3, rest: EMPTY}}};

OneTwoFour.first; // 1
OneTwoFour.rest; // {"first": 2, "rest": {"first": 3, "rest": {}}}

// Taking length of linked list:
const lengthObj = (node, delayed = 0) => 
  node === EMPTY
    ? delayed
    : length(node.rest, delayed + 1)

lengthObj(OneTwoFour); // 3

// Recursively with TCO:
const copy2 = (node, delayed = EMPTY) =>
  node === EMPTY
    ? delayed
    : copy2(node.rest, {first: node.first, rest: delayed})

// copy2(..) reverses the list as it is constructed back to front
copy2(OneTwoFour);
  // {"first": 3, "rest": {"first": 2, "rest": {"first": 1, "rest": {}}}}

const reverse = (node, delayed = EMPTY) =>
  node === EMPTY
    ? delayed
    : reverse(node.rest, {first: node.first, rest: delayed})

// Create a reversing map:
const reverseMapWith = (fn, node, delayed = EMPTY) =>
  node === EMPTY
    ? delayed
    // Run the function on the first node in the parameter as it is passed in
    : reverseMapWith(fn, node.rest, {first: fn(node.first), rest: delayed})

reverseMapWith((x) => x * x, OneTwoFour);
  // {"first": 9, "rest": {"first": 4, "rest": {"first": 1, "rest": {}}}}

// Regular `mapWith` can be done by doing a reverse (on the structure of reverseMapWith)
var mapWith = (fn, node, delayed = EMPTY) =>
  node === EMPTY
    ? reverse(delayed) // Reverse here
    : mapWith(fn, node.rest, {first: fn(node.first), rest: delayed});

// Takes twice as long as a straight iteration because it must iterate over the entire list twice: once to map, and once to reverse
mapWith((x) => x * x, OneTwoFour);
  // {"first": 1, "rest": {"first": 4, "rest": {"first": 9, "rest": {}}}}

/**
 * Mutation
**/


