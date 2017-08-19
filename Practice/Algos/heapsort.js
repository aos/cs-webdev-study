/*
 * Heap sort
 *
 * Sorts an array as if it were a binary tree
 *
 * Manage array as a binary tree:
 * 1. index 0 is root of tree
 * 2. parent of any node N is N/2
 * 3. Left-hand side child of node L is 2*L
 * 4. Right-hand child of node R is 2*R+1
*/

const heapify = (array, heapSize, i) => {
  let left = i * 2 + 1,
      right = i * 2 + 2,
      largest = i;

  if (left < heapSize && array[left] > array[largest]) {
    largest = left;
  }

  if (right < heapSize && array[right] > array[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [array[i], array[largest]] = [array[largest], array[i]];
    heapify(array, heapSize, largest);
  }
}

const buildHeap = (array) => {
  let heapSize = array.length;

  for (let i = Math.floor(heapSize / 2); i >= 0; i--) {
    heapify(array, heapSize, i);
  }
}

const heapSort = (array) => {
  let heapSize = array.length;

  buildHeap(array);

  while (heapSize > 1) {
    heapSize--;

    [array[0], array[heapSize]] = [array[heapSize], array[0]];
    heapify(array, heapSize, 0);
  }
}


