const CustomError = require("../extensions/custom-error");
module.exports = function repeater(str, options ) {
  let stroka;
if(str === null){
  stroka = 'null';
}else{
  stroka = str.toString().slice();
}
  let countRepeat = options.repeatTimes
  let separator;
  let dopStroka;
  if ('addition' in options){
    if (options.addition === null){
      dopStroka = 'null'
    }else {
      dopStroka = options.addition.toString().slice()
    }
  }
  let dopStrokaRepeat = options.additionRepeatTimes
  let dopStrokaSeparator;

  let result = [];
  let tmpArr = [];
  resultCreate();
  function resultCreate() {
    result = stroka.split('');
    if ('addition' in options){
      tmpArr[0] = dopStroka;
      if ('additionSeparator' in options){
        dopStrokaSeparator = options.additionSeparator.toString().slice()
      }else{
        dopStrokaSeparator = '|';
      }
      if('additionRepeatTimes' in options && options.additionRepeatTimes !== undefined){
        for (let i = 1; i < dopStrokaRepeat; i++) {
          if (tmpArr.length<1){
            continue
          }else{
            tmpArr[i] = dopStrokaSeparator + dopStroka
          }
        }
      }
    }

    tmpArr = tmpArr.join('').split('');
    result = result.concat(tmpArr).join('');
    tmpArr = [];
    tmpArr[0]= result
    if ('separator' in options){
      separator  = options.separator.toString().slice()
    }else{
      separator = '+';
    }

    if('repeatTimes' in options && options.repeatTimes !== undefined){
      for (let i = 1; i < countRepeat; i++) {
        if (tmpArr.length<1){
          continue
        }else{
          tmpArr[i] = separator + result
        }
      }
    }
  }
  return  tmpArr.join('')
};