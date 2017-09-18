/*
 * Pointfree
 * - Functions that never mention the data upon which they operate
*/

const compose = (f, g) => (x) => f(g(x));
const toLower = (x) => x.toLowerCase();
const toUpper = (x) => x.toUpperCase();
const shout = (x) => x + '!';
const rev = (x) => x.reduce((acc, c) => [c].concat(acc), []);
const replace = (search, what) => (x) => x.replace(search, what);
const split = (at) => (x) => x.split(at);
const join = (at) => (x) => x.join(at);
const map = (f) => (x) => x.map(f);
const head = (x) => x[0];

/* Example 1 */
// Not pointfree
var snakeCase = (word) => word.toLowerCase().replace(/\s+/ig, '_');
console.log(snakeCase('hello my baby'));

// Pointfree way
var snakePoint = compose(replace(/\s+/ig, '_'), toLower);
console.log(snakePoint('hello my darling'));

/* Example 2 */
// Not pointfree
var initials = (name) => name.split(' ').map(compose(toUpper, head)).join('. ');
console.log(initials('pepe le peu'));

// Pointfree
var initPoint = compose(join('. '), compose(map(compose(toUpper, head)), split(' ')));
console.log(initPoint('david foster wallace'));

/* Example 3 */
var angry = compose(toUpper, shout);
console.log(angry('hello'));

var latin = compose(map(angry), rev);
console.log(latin(['frog', 'eyes']));
