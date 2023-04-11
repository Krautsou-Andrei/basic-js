const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let array = numberForArray(n);
  let number = n;
  if (array.length > 1) {
    number = array.reduce((sum, current) => sum + current, 0);
    let temp = number;
    number = 0;
    return (number += getSumOfDigits(temp));
  }
  return number;
}

const numberForArray = (n) => {
  let array = n
    .toString(10)
    .split("")
    .map((item) => parseInt(item, 10));
  return array;
};

module.exports = {
  getSumOfDigits,
};
