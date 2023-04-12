const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let array = [];
  let obj = {};
  domains.forEach((item) => {
    array.push([...item.split(".")].reverse());
  });

  array.forEach((domain) => {
    domain.forEach((level, index, array) => {
      let key = "." + array.slice(0, index + 1).join(".");
      if (obj[key]) {
        obj[key] = obj[key] + 1;
      } else {
        obj[key] = 1;
      }
    });
  });

  return obj;
}

module.exports = {
  getDNSStats,
};
