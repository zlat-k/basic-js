const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let res = 0;
    if (arr instanceof Array) {
      res++;
      let counter = 0;
      for (let i = 0; i < arr.length; i++) {
        let deep = this.calculateDepth(arr[i]);
        if (deep > counter) {
          counter = deep;
        }
      }
      res += counter;
    }
    return res;
  }
};