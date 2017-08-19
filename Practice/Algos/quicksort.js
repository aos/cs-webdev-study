/*
 * Quick sort implementation
 *
 * 1. Partitioning
 * 2. Recursion
*/

function partition(array, start, end) {
  let pivot = array[end];

  // Pivot index
  let pIndex = start;

  for (let i = start; i < end; i++) {
    if (array[i] <= pivot) {
      // Swap array[i] with element @ pIndex
      [array[i], array[pIndex]] = [array[pIndex], array[i]];
      pIndex++;
    }
  }
  // Swap elements at partition index and pivot index
  // (As the only remaining elements are > than pivot)
  [array[pIndex], array[end]] = [array[end], array[pIndex]];

  return pIndex;
}

function quick(array, start, end) {

  if (start < end) {
    let pIndex = partition(array, start, end);
    quick(array, start, pIndex - 1);
    quick(array, pIndex + 1, end);
  } 

}

let arr = [7, 6, 5, 4, 3, 2, 1, 0]

quick(arr, 0, arr.length - 1)

console.log(arr);
