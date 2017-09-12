/* Pure functions
 *
 * Given the same input, will always return the same output
 * and does not have any observable side effect.
*/

const xs = [1, 2, 3, 4, 5];

// Pure
xs.slice(0, 3); // [1, 2, 3]
xs.slice(0, 3); // [1, 2, 3]
xs.slice(0, 3); // [1, 2, 3]

// Impure
xs.splice(0, 3); // [1, 2, 3]
xs.splice(0, 3); // [4, 5]
xs.splice(0, 3); // []

/* Another example */
const minimum = 21;

// Impure
var checkAge = (age) => age >= minimum;

// Pure
var checkAge = (age) => {
  const minimum = 21;
  return age >= minimum;
}

const immutableState = Object.freeze({
  minimum: 21
});

/*
 * Pure functions can always be cached by input
*/

const memoize = function (f) {
  const cache = {};

  return function () {
    const arg_str = JSON.stringify(arguments);
    cache[arg_str] = cache[arg_str] || f.apply(f, arguments);
    return cache[arg_str];
  };
};

/*
 * Pure functions are completely self-contained
*/

// Impure
var signUp = function(attrs) {
  var user = saveUsr(attr);
  welcomeUser(user);
};

var saveUser = function(attrs) {
  var user = Db.save(attr);
  // ...
};

var welcomeUser = function(user) {
  Email(user/* , ... */);
  // ...
};

// Pure
var signUp = function(Db, Email, attrs) {
  return function() {
    var user = saveUser(Db, attrs);
    welcomeUser(Email, user);
  };
};

var saveUser = function(Db, attrs) {
  // ...
};

var welcomeUser = function(Email, user) {
  // ...
};
