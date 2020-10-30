const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (typeof members !== 'object' || members === null || members === undefined){
        return false;
    }
    let tmp = '';
    let forTmp = '';
    for (let i = 0; i < members.length; i++) {
        if (typeof members[i] != "string") {
            continue;
        }
        tmp = tmp + members[i].trim().charAt(0).toUpperCase();
    }
    if(tmp.length>0){
        return  forTmp = tmp.split('').sort().join('');
    }
    return false;
};