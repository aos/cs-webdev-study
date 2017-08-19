function merge(left, right) {
  const result = [];
  let li = 0,
      ri = 0;

  while (li < left.length && ri < right.length) {

    if (left[li] < right[ri]) {
      result.push(left[li]);
      li++;
    }

    if (right[ri] < left[li]) {
      result.push(right[ri]);
      ri++;
    }
  }

  while (li < left.length) {
    result.push(left[li]);
    li++;
  }

  while (ri < right.length) {
    result.push(right[ri]);
    ri++;
  }

  return result;
}

function mergeSortRec(array) {

  if (array.length == 1) {
    return array;
  }

  const midIndex = Math.floor(array.length / 2),
        left = array.slice(0, midIndex),
        right = array.slice(midIndex, array.length); 

  return merge(mergeSortRec(left), mergeSortRec(right));
}

function mergeSort(array) {
  array = mergeSortRec(array);
}

let arr = [9, 0, 2, 3, 4, 5, 1, 37, 3];

//mergeSort(arr);

console.log(arr);
