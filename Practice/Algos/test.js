const quick = require('./quicksort');

let arr = [12, 2, 5, 1, 7, 9, 0]

quick(arr, 0, arr.length - 1);

console.log(arr);
