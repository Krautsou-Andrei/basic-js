const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error("'arr' parameter must be an instance of the Array!");
  }

  let newArray = [...arr];

  newArray.forEach((item) => {
    if (Array.isArray(item)) {
      return (newArray = transform(item));
    }
  });

  const arrayControl = ["--double-next", "--discard-next", "--double-prev", "--discard-prev"];
  let arrayCurretnControl = [];
  arrayControl.forEach((item) => {
    arrayCurretnControl = [...arrayCurretnControl, ...newArray.filter((element) => element === item)];
  });

  arrayCurretnControl.forEach((item) => {
    let index = newArray.indexOf(item);

    if (item === "--double-next") {
      if (index < newArray.length - 1) {
        newArray.splice(index + 1, 0, newArray[index + 1]);
      }
    }

    if (item === "--discard-next") {
      if (index < newArray.length - 1) {
        newArray.splice(index + 1, 1);
      }
    }

    if (item === "--double-prev") {
      if (index > 0) {
        newArray.splice(index, 0, newArray[index - 1]);
      }
    }

    if (item === "--discard-prev") {
      if (index > 0) {
        newArray.splice(index - 1, 1);
      }
    }
  });

  arrayCurretnControl.forEach((item) => {
    newArray = newArray.filter((element) => element !== item);
  });

  return newArray;
}

module.exports = {
  transform,
};
