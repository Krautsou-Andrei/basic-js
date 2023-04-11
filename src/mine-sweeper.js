const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let newMatrix = [];
  let count = 0;

  for (let i = 0; i < matrix.length; i++) {
    let row = [];

    for (let k = 0; k < matrix[i].length; k++) {
      count = 0;
      if (matrix[i][k] === true) {
        row.push(1);
      }
      if (matrix[i][k] === false) {
        if (i !== matrix.length - 1) {
          if (k !== matrix[i].length - 1) {
            if (matrix[i + 1][k + 1] === true) {
              count++;
            }
          }
          if (k !== 0) {
            if (matrix[i + 1][k - 1] === true) {
              count++;
            }
          }

          if (matrix[i + 1][k] === true) {
            count++;
          }
        }

        if (i !== 0) {
          if (k !== matrix[i].length - 1) {
            if (matrix[i - 1][k + 1] === true) {
              count++;
            }
          }

          if (k !== 0) {
            if (matrix[i - 1][k - 1] === true) {
              count++;
            }
          }

          if (matrix[i - 1][k] === true) {
            count++;
          }
        }

        if (k !== 0) {
          if (matrix[i][k - 1] === true) {
            count++;
          }
        }
        if (k !== matrix[i].length - 1) {
          if (matrix[i][k + 1] === true) {
            count++;
          }
        }

        row.push(count);
      }
    }
    newMatrix.push(row);
  }

  return newMatrix;
}

module.exports = {
  minesweeper,
};
