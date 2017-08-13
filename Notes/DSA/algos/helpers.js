const List = require('./array');
exports.swap = function(array, index1, index2) {
  /*
    const aux = array[index1];

    array[index1] = array[index2];
    array[index2] = aux;
    */

  // ES6 style array swap using destructuring
  [array[index1], array[index2]] = [array[index2], array[index1]];
};
