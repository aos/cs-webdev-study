/**
 * Function Decorators
*/

// Unary:
// Decorator that modifies the number of arguments a function takes. Turns a function into one taking exactly one argument
// `.map` example:
[1, 2, 3].map(function (element, index, arr) {
  console.log({element: element, index: index, arr: arr})
})
// Takes three arguments, if you pass a function taking only one argument, it ignores the additional ones. But some functions have optional second and even third arguments:
['1', '2', '3'].map(parseInt) // defined as parseInt(string[, radix]), index interpreted as radix
// [1, NaN, NaN]

// Using a decorator:
const unary = (fn) => 
  fn.length === 1 // Number of arguments
    ? fn
    : function (something) {
        return fn.call(this, something);
    }