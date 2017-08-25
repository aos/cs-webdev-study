/** 1.8 - Zero Matrix
 *
 * Write an algorithm such that if an element in an MxN matrix is 0,
 * its entire row and column are set to 0.
 *
 * M rows, N columns
*/

const zero = (matrix) => {
  let zeroColumns = [],
      zeroRows = [];
  
  // Loop through matrix, storing columns and rows with '0'
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        zeroRows.push(i);
        zeroColumns.push(j);
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    // if row contains zero, zero out whole row
    if (zeroRows.indexOf(i) > -1) {
      for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] = 0;
      }
    }
    // Otherwise, zero out column if it contains zero
    else {
      for (let j = 0; j < matrix[i].length; j++) {
        if (zeroColumns.indexOf(j) > -1) {
          matrix[i][j] = 0;
        }
      }
    }
  }
  return matrix;
}

if (require.main === module) {
  let mat = [[1, 1, 2], [1, 1, 2], [1, 0, 2], [1, 1, 2]];
  console.log(zero(mat));
}
