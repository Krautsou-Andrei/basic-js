const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[i].length; k++) {
      if (matrix[i][0] >= 0 && i > 0 && matrix[i - 1][matrix[i - 1].length - 1] !== 0) {
        count += matrix[i][k];
      }
      if (matrix[i][0] >= 0 && i === 0) {
        count += matrix[i][k];
      }
    }
  }

  return count;
}

module.exports = {
  getMatrixElementsSum,
};
