/*
 * Quick sort using a middle pivot
 *
 * 1. Partition
 * 2. Divide and conquer 
*/

function partition(array, left, right) {
  let pivot = array[Math.floor((left + right) / 2)];
  let i = left;
  let j = right;

  // Go until left and right pointers cross
  while (i <= j) {

    // Everything left of pivot should be smaller
    while (array[i] < pivot) {
      i++;
    }

    // Everything right of pivot should be larger
    while (array[j] > pivot) {
      j--;
    }

    if (i <= j) {
      // Swap left and right values
      // Value at 'i' should be greater than pivot
      // Value at 'j' should be less than pivot
      [array[i], array[j]] = [array[j], array[i]];
      i++;
      j--;
    }
  }
  // Return partition index
  return i;
}

function quick(array, left, right) {
  if (array.length > 1) {

    let pIndex = partition(array, left, right);

    if (left < pIndex - 1) {
      quick(array, left, pIndex - 1);
    }
    if (right > pIndex) {
      quick(array, pIndex, right);
    }
  }
}

let arr = [7, 2, 9, 0, 1, 5, 4, 12];

quick(arr, 0, arr.length - 1);

console.log(arr);
