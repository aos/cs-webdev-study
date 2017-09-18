/*
 * Compose
 *
 * Right-to-left flow of data (g() runs before f())
*/

var compose = function(f, g) {
  return function(x) {
    return f(g(x));
  };
};

var compose = (f, g) => (x) => f(g(x));

// Example 1:
var toUpperCase = (x) => x.toUpperCase();
var exclaim = (x) => x + '!';

var shout = compose(exclaim, toUpperCase);
// console.log(shout("hi there"));

// Example 2:
var head = (x) => x[0];
// Native javascript `reverse` mutates array
var rev = (arr) => arr.reduce((acc, x) => [x].concat(acc), []);

var last = compose(head, rev);
// console.log(last(['jumpkick', 'roundhouse', 'uppercut']));

// Composition is associative
// var associative = compose(f, compose(g, h)) == compose(compose(f, g), h);

// Uppercasing the string
compose(toUpperCase, compose(head, rev));
// OR
compose(compose(toUpperCase, head), rev);

// Variadic compose
var lastUpper = compose(compose(toUpperCase, head), rev);
console.log(lastUpper(['jumpkick', 'roundhouse', 'uppercut']))
