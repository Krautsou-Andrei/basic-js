const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(key) {
    this.key = key === false ? key : true;
    this.crypt = "";
    this.array = [];
    this.arrayCode = [];
    this.countCode = 0;
  }

  init(str, code) {
    if (str === undefined || code === undefined) {
      throw Error("Incorrect arguments!");
    }

    this.crypt = "";
    this.array = [...str];
    this.arrayCode = [...code];
    this.countCode = 0;

    if (!this.key) {
      this.array.reverse();
    }
  }

  encrypt(str, code) {
    this.init(str, code);

    this.array.forEach((item) => {
      let change = item.toLowerCase().charCodeAt();

      if (change >= 97 && change <= 122) {
        change = item.toLowerCase().charCodeAt() + (this.arrayCode[this.countCode].toLowerCase().charCodeAt() - 97);
        this.countCode++;
        if (change > 122) {
          change = change - 123 + 97;
        }
      }

      if (this.countCode > this.arrayCode.length - 1) {
        this.countCode = 0;
      }

      this.crypt = this.crypt + String.fromCharCode(change).toUpperCase();
    });
    return this.crypt;
  }
  decrypt(str, code) {
    this.init(str, code);

    this.array.forEach((item) => {
      let change = item.toLowerCase().charCodeAt();

      if (change >= 97 && change <= 122) {
        change = item.toLowerCase().charCodeAt() - (this.arrayCode[this.countCode].toLowerCase().charCodeAt() - 97);
        if (change < 97) {
          change = 123 - 97 + change;
        }
        this.countCode++;
      }

      if (this.countCode > this.arrayCode.length - 1) {
        this.countCode = 0;
      }

      this.crypt = this.crypt + String.fromCharCode(change).toUpperCase();
    });
    return this.crypt;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
