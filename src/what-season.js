const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date) {
  let tmpMonth = 0;
  if (arguments.length===0){
    return 'Unable to determine the time of year!'
  }
  if(typeof date.getTime() != "number" ){
    return "THROWN";
  }
  if (typeof date != 'object'){
    return new Error()
  }else{
    tmpMonth = date.getMonth();
    if (tmpMonth===11||tmpMonth<2){
      return "winter"
    }if(tmpMonth>=2&&tmpMonth<5){
      return "spring"
    }if(tmpMonth>=5&&tmpMonth<8){
      return "summer"
    }if(tmpMonth>=8&&tmpMonth<11){
      return "autumn"
    }
  }
  return 'Unable to determine the time of year!'
};
