const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!arr instanceof Array ) {
        return "THROWN";
    }
    let tmpArr = arr.map((index)=>index);
    if (tmpArr.length === 0) {
        return tmpArr;
    }

    for (let i = 0; i < tmpArr.length; i++) {

        if(tmpArr[0] === '--discard-prev' && i===0 || tmpArr[0] === '--double-prev' && i===0  ){
            delete tmpArr[0]
        }
        if(tmpArr[tmpArr.length-1] === '--discard-next' && i=== tmpArr.length-1|| tmpArr[tmpArr.length-1]=== '--double-next' && i===tmpArr.length ){
            delete tmpArr[tmpArr.length-1]
        }

        if (tmpArr[i] === '--discard-next') {// deleted next
                delete tmpArr[i];
                delete tmpArr[i + 1];
            continue;
        }
        if (tmpArr[i] === '--discard-prev') {// delete  prev
                delete tmpArr[i];
                delete tmpArr[i - 1];

            continue;
        }
        if (tmpArr[i] === '--double-next') {
            tmpArr.splice(i, 1, tmpArr[i + 1])
            i++;
            continue;
        }
        if (tmpArr[i] === '--double-prev') {
            tmpArr.splice(i, 1, tmpArr[i - 1])
        }
    }
    tmpArr = tmpArr.filter(function (x) {
        return x !== undefined;
    })
    return tmpArr;
};