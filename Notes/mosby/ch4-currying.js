/* Currying
 * 
 * Callying a function with fewer arguments than it expects.
 * It returns a function that takes the remaining arguments.
*/

// const add = function(x) {
//   return function(y) {
//     return x + y;
//   }
// }

const add = (x) => (y) => x + y;

const increment = add(1);
const addTen = add(10);

increment(2); // 3
addTen(2); // 12

const curry = require('lodash').curry;

const match = curry((what, str) => str.match(what))

const replace = curry((what, replacement, str) => str.replace(what, replacement));

const filter = curry((f, ary) => ary.filter(f));

const map = curry((f, ary) => ary.map(f));

console.log(match(/\s+/g, 'hello world'));
console.log(match(/\s+/g)('hello world'));

const hasSpaces = match(/\s+/g);
// function(x) { return x.match(/\s+/g) }
console.log(hasSpaces('hello world'));

console.log(filter(hasSpaces, ['tori_spelling', 'tori amos']));

const findSpaces = filter(hasSpaces);
// function(ary) {return ary.filter(function(x) { return x.match(/\s+/g) })}
console.log(findSpaces(['tori_spelling', 'tori amos']));

const noVowels = replace(/[aeiouy]/ig);
// function(replacement, str) { return str.replace(/[aeiouy]/ig, replacement) }

const censored = noVowels("*");
console.log(censored('Chocolate Rain'));

/* 
 * More than a pun
*/

const getChildren = function(x) {
  return x.childNodes;
};

const allTheChildren = map(getChildren);
