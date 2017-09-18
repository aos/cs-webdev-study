const add = (flock_x, flock_y) => (flock_x + flock_y);
const multiply = (flock_x, flock_y) => (flock_x * flock_y);

const flock_a = 4;
const flock_b = 2;
const flock_c = 0;

const result = add(
  multiply(flock_b, add(flock_a, flock_c)), multiply(flock_a, flock_b)
);

console.log(result);

/* Knowledge of the ancients */

// Associative property
add(add(x, y), z) === add(x, add(y, z));

// Commutative
add(x, y) === add(y, x);

// Identity
add(x, 0) === x;

// Distributive
multiply(x, add(y, z)) === add(multiply(x, y), multiply(x, z));

/* Simplifying seagulls */

// Apply identity property to remove extra add
add(multiply(flock_b, flock_a), multiply(flock_a, flock_b));

// Apply distributive property
multiply(flock_b, add(flock_a, flock_a));
