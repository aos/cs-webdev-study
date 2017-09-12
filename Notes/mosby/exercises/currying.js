const _ = require('ramda');

/*
 * Exercise 1
 * -- Refactor to remove all arguments by partially applying function.
*/

const words = _.split(' ');
console.log(words('Hello my baby'));

/*
 * Exercise 1a
 * -- Use map to make a new words fn that works on an array of strings
*/

const sentences = _.map(words);
console.log(sentences(["What's up buttercup", "Yes darling"]));

/*
 * Exercise 2
 * -- Refactor to remove all arguments by partially applying the functions.
*/

const filterQs = _.filter(_.match(/q/i));

/*
 * Exercise 3
 * -- Use the helper function _keepHighest to refactor max to not
 *  reference any arguments
*/

const _keepHighest = (x, y) => (x >= y ? x : y); // Helper

const max = _.reduce(_keepHighest, -Infinity);
console.log(max([1, 2, 3, 4]));

/*
 * Bonus 1
 * -- Wrap array's slice to be functional and curried
 *  [1, 2, 3].slice(0, 2);
*/

const sliceCurry = (start, end) => (arr) => arr.slice(start, end);
const sliceFromSecond = sliceCurry(1);
console.log(sliceFromSecond([1, 2, 3, 4, 5]));

/*
 * Bonus 2
 * -- Use slice to define a function 'take' that returns n elements from
 *  the beginning of an array. Make it curried.
 *  Ex: For ['a', 'b', 'c'] with n = 2, output: ['a', 'b']
*/

const take = (n) => (arr) => arr.slice(0, n);
const takeTwo = take(2);
console.log(takeTwo([1, 2, 3, 4]));
