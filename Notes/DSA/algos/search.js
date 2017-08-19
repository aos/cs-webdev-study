module.exports = function ArrayList() {
  let array = [];

  const partition = (array, left, right) {
    let i = left,
        j = right,
        pivot = array[Math.floor(array.length / 2)];

    while (i <= j) {

      while (array[i] < pivot) {
        i++; 
      }

      while (array[j] > pivot) {
        j--;
      }

      if (i <= j) {
        [array[i], array[j]] = [array[j], array[i]];
        i++;
        j--;
      }
    }

    return i;
  }
  const quick = (array, left, right) {
    if (array.length > 1) {
      let partitionIndex = partition(array, left, right);

      if (left < partitionIndex - 1) {
        quick(array, left, partitionIndex - 1);
      }

      if (right > partitionIndex) {
        quick(array, partitionIndex, right);
      }
    }
  };
  // For searching algos
  this.quickSort = function() {
    quick(array, 0, array.length - 1);
  }

  // Sequential search (aka linear search)
  this.sequentialSearch = function(item) {
    for (let i = 0; i < array.length; i++) {
      if (item === array[i]) {
        return i;
      }
    }
    return -1;
  }

  this.binarySearch = function(item) {
    // Requires a sorted data structure
    this.quickSort();

    let low = 0,
        high = array.length - 1,
        mid, element;

    while (low <= high) {
      // "Recursive" in the sense we are always looking
      // At the middle of the array and 
      // Just tightening our left and right boundaries
      mid = Math.floor((low + high) / 2);
      element = array[mid];

      if (element < item) {
        low = mid + 1;
      }
      else if (element > item) {
        high = mid - 1;
      }
      else {
        return mid;
      }
    }
    return -1;
  } 
}
