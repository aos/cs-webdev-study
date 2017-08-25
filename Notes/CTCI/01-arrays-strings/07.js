/** 1.7 - Rotate Matrix
 *
 * Given an image represented by an NxN matrix,
 * where each panel in the image is 4 bytes,
 * write a method to rotate the image 90 degrees. 
 * Can you do this in place?
 *
 * Matrix (4x4): 
 * [
 *  [0, 1, 2, 3],
 *  [0, 1, 2, 3],
 *  [0, 1, 2, 3],
 *  [0, 1, 2, 3]
 * ]
 *
 * Two solutions exist:
 * 1. Create a new matrix and push values into it
 * 2. An in-place swap using ES6's array destructuring
*/

const rotate = (matrix) => {
  
  if (matrix.length == 0 || matrix.length != matrix[0].length) return false;
  // let newMatrix = [];
  
  for (let i = 0; i < matrix.length; i++) {
    let row = []; 

    for (let j = matrix[i].length - 1; j > i; j--) {
      // row.push(matrix[matrix.length - 1 - j][i]);

      // In-place swap
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }

    // newMatrix.push(row);
  }

  return matrix;
}

if (require.main === module) {
  const matrix = [[0, 1, 2, 3],
                  [0, 1, 2, 3],
                  [0, 1, 2, 3],
                  [0, 1, 2, 3]]

  console.log(rotate(matrix));
}
