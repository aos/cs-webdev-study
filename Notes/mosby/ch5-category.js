/*
 * Category Theory
 *
 * 1. Collection of objects (Data Types): String, Boolean, Number, Object
 *  - View data types as sets of all possible values
 *    - Ex: Boolean = {true, false}
 *    - Ex: Number = {1, 2, 0.3, ...} (all possible numeric values)
 *
 * 2. Collection of morphisms (Pure Functions)
 * 3. Notion of composition on the morphisms (`compose`)
 * 4. Distinguished morphism called `identity`
*/

const compose = (f, g) => (x) => f(g(x));

// Identity function - stands in for a value (data)
const id = (x) => x; 

/*
 * Must play nicely with `compose`
 * compose(id, f) == compose(f, id) == f;
*/

// Example 1:
var g = (x) => x.length;
var f = (x) => x === 4;

var isFourLetterWord = compose(f, g);
