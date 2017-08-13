const ArrayList = require('./sort');

function createNonSortedArray(size) {
  const array = new ArrayList();

  for (let i = size; i > 0; i--) {
    array.insert(i);
  }

  console.log(array.toString());
  return array;
}

// Bubble sort
console.log('Bubble sort --');
let array = createNonSortedArray(5);
array.bubbleSort();
console.log(array.toString());

// Improved bubble sort
console.log('Improved bubble sort --');
array = createNonSortedArray(5);
array.improvedBubble();
console.log(array.toString());

// Selection sort
console.log('Selection sort --');
array = createNonSortedArray(5);
array.selectionSort();
console.log(array.toString());

// Selection sort
array = createNonSortedArray(5);
array.insertionSort();
console.log(array.toString());

// Merge sort
array = createNonSortedArray(10);
array.mergeSort();
console.log(array.toString());
