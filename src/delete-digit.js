const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const array = Array.from(n.toString(10)).map((i) => parseInt(i));
  const minNumber = Math.min.apply(Math, array);
  const index = array.indexOf(minNumber);

  if (index !== -1 && (index !== array.length - 1 || array[index] === 0)) {
    array.splice(index, 1);
  } else {
    const newArray = [...array];
    newArray.pop();
    const newMinNumber = Math.min.apply(Math, newArray);
    const newIndex = newArray.indexOf(newMinNumber);

    if (index !== -1) {
      array.splice(newIndex, 1);
    }
  }

  return +array.join("");
}

module.exports = {
  deleteDigit,
};
