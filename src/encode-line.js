const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const array = [...str];
  const result = [];
  let pattern = array[0];
  let count = 1;

  array.forEach((item, index, array) => {
    if (array[index + 1] !== pattern) {
      pattern = array[index + 1];
      if (count > 1) {
        result.push(count, array[index]);
      } else {
        result.push(array[index]);
      }
      count = 1;
    } else {
      count++;
    }
  });

  return result.join("");
}

module.exports = {
  encodeLine,
};
