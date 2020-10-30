const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
    const MODERN_ACTIVITY = 15;
    const HALF_LIFE_PERIOD = 5730;

    if (typeof sampleActivity !== 'string') return false;

    let sampleActivityNew = parseFloat(sampleActivity);
    if (sampleActivityNew > 0 && sampleActivityNew <= MODERN_ACTIVITY ) {
      let K = 0.693 / HALF_LIFE_PERIOD;
      let age = Math.log(MODERN_ACTIVITY / sampleActivityNew) / K;
      return Math.ceil(age);
    }
    return false;
};
