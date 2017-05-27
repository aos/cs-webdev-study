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
const surname = (name) => {
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
const [car, ...cdr] = [1, 2, 3, 4, 5];
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

