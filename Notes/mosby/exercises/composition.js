const _ = require('ramda');
const accounting = require('accounting');

const trace = (msg) => _.tap(x => console.log(msg, x));

// Example Data
const CARS = [{
  name: 'Ferrari FF',
  horsepower: 660,
  dollar_value: 700000,
  in_stock: true,
}, {
  name: 'Spyker C12 Zagato',
  horsepower: 650,
  dollar_value: 648000,
  in_stock: false,
}, {
  name: 'Jaguar XKR-S',
  horsepower: 550,
  dollar_value: 132000,
  in_stock: false,
}, {
  name: 'Audi R8',
  horsepower: 525,
  dollar_value: 114200,
  in_stock: false,
}, {
  name: 'Aston Martin One-77',
  horsepower: 750,
  dollar_value: 1850000,
  in_stock: true
}, {
  name: 'Pagani Huayra',
  horsepower: 700,
  dollar_value: 1300000,
  in_stock: false
}];

/* Exercise 1:
 * ===========
 * Use _.compose() to rewrite the function below
*/

const isLastInStock = _.compose(_.prop('in_stock'), _.last);
// console.log(isLastInStock(CARS));

/* Exercise 2:
 * ===========
 * Use _.compose(), _.prop() and _.head() to retrieve the name of the first car
*/

const nameOfFirstCar = _.compose(_.prop('name'), _.head);
// console.log(nameOfFirstCar(CARS));

/* Exercise 3:
 * ===========
 * Use the helper function _average to refactor as a composition
*/

const _average = (xs) => (_.reduce(_.add, 0, xs) / xs.length);

const averageDollarValue = _.compose(_average, _.map(_.prop('dollar_value')));
// console.log(averageDollarValue(CARS));

/* Exercise 4:
 * ===========
 * Write sanitizeNames using compose
 * Output: list of lowercase, and underscored cars names (['ferrari_ff'])
*/

const _underscore = _.replace(/\W+/g, '_');

const sanitizeNames = _.map(_.compose(_underscore, _.toLower, _.prop('name')))
// console.log(sanitizeNames(CARS));

/* Bonus 1:
 * ========
 * Refactor availablePrices with compose
*/

const formatPrice = _.compose(accounting.formatMoney, _.prop('dollar_value'));
const availablePrices = _.compose(
  _.join(', '),
  trace('before join'),
  _.map(formatPrice),
  _.filter(_.prop('in_stock')),
  );

// console.log(availablePrices(CARS));

/* Bonus 2:
 * ========
 * Refactor to pointfree (Hint: use _.flip())
*/

const append = _.flip(_.concat);
const fastestCar = _.compose(
  append(' is the fastest!'),
  _.prop('name'),
  _.last,
  _.sortBy(_.prop('horsepower'))
  );
console.log(fastestCar(CARS));
