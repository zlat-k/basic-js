//
//     function countCats (matrix){
//         let count = 0;
//         if (matrix.length === 0) {
//             return 0;
//         }
//         for (let j = 0; j < matrix.length; j++) {
//             for (let i = 0; i <= matrix[j].length; i++) {
//                 if (matrix[j][i] === '^^') {
//                     count++;
//                 }
//             }
//         }
//         return count;
//
// };
// console.log('0-0  = '+countCats([
//     [0, 1, '^^'],
//     [0, '^^', 2],
//     ['^^', 1, 2, '^^', '^^', '^^']
// ]));

//dreamTeam

// function createDreamTeam(arr) {
//     let tmp = '';
//     let forTmp = '';
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] != "string") {
//             continue;
//         }
//         tmp = tmp + arr[i].trim().charAt(0).toUpperCase();
//     }
//     if(forTmp.length>0){
//         return  forTmp = tmp.split('').sort().join('');
//     }
//     return false;
// }
// createDreamTeam([34," Gfgf ", " Akjjk ", 454, 'Yun']);

//getSeason

// function getSeason(date) {
//    let tmpMonth = 0;
// if (typeof date != 'object'){
//     return new Error()
// }else{
//     tmpMonth = date.getMonth();
//     if (tmpMonth===11||tmpMonth<2){
//         return "winter"
//     }if(tmpMonth>=2&&tmpMonth<5){
//         return "spring"
//     }if(tmpMonth>=5&&tmpMonth<8){
// return "summer"
//     }if(tmpMonth>=8&&tmpMonth<11){
//         return "autumn"
//     }
// }
//     return 'Unable to determine the time of year!'
// }
//
// getSeason(new Date(2000, 2, 3));
// console.log(getSeason(new Date(849, 6, 14, 22, 29, 14, 719)));
// console.log(getSeason(new Date(1140, 1, 28, 13, 33, 33, 459)));
// console.log(getSeason(new Date(488, 1, 4, 15, 48, 52, 400)));
// console.log(getSeason(new Date(2205, 3, 3, 4, 3, 27, 561)));
// console.log(getSeason(new Date(920, 9, 29, 17, 14, 55, 653)));
// console.log(getSeason(new Date(2361, 2, 24, 22, 13, 47, 69)));
// console.log(getSeason(new Date(1981, 3, 1, 13, 25, 56, 329)));
// console.log(getSeason(new Date(371, 9, 2, 22, 45, 13, 528)));

// function createDreamTeam(members) {
//     let tmp = '';
//     let forTmp = '';
//     for (let i = 0; i < members.length; i++) {
//         if (typeof members[i] != "string") {
//             continue;
//         }
//         tmp = tmp + members[i].trim().charAt(0).toUpperCase();
//     }
//     if(tmp.length>0){
//         return  forTmp = tmp.split('').sort().join('');
//     }
//     return false;
// };
// console.log( createDreamTeam([]))
// function transform(arr) {
//
//     if (
//         typeof arr === 'number'
//         || typeof arr === 'boolean'
//         || typeof arr === 'null'
//         || typeof arr === 'undefined'
//         || typeof arr !== 'object'
//
//     ) {
//         return "THROWN";
//     }
//     let tmpArr = arr.slice();
//     if (tmpArr.length === 0) {
//         return tmpArr;
//     }
//     for (let j = 0; j < tmpArr; j++) {
//         if (tmpArr[j] < 0) {
//             continue;
//         }
//         tmpArr[j] = +tmpArr[j];
//     }
//     for (let i = 0; i < arr.length; i++) {
//         // if (typeof tmpArr[i] === 'object') {
//         //     return "THROWN";
//         // }
//         //5
//         if (arr[i] === '--discard-next') {// deleted next
//
//             if (i === arr.length - 1) {
//                 tmpArr.splice(i, 1);
//             } else {
//                 tmpArr[i] = 'undefined';
//                 tmpArr[i+1] = 'undefined'
//                 // tmpArr.splice(i, 1, 'undefined');
//                 // tmpArr.splice(i + 1, 1,'undefined');
//                 i++;
//             }
//         }
//         if (arr[i] === '--discard-prev') {// delete  prev
//             if (i === 0) {
//                 tmpArr.splice(0, 1);
//             } else {
//                 tmpArr.splice(i, 1);
//                 tmpArr.splice(i - 1, 1);
//             }
//             continue;
//         }
//         if (arr[i] === '--double-next') {
//             if(arr[i] == arr.length - 1){
//                 break
//             }
//             if (tmpArr[i + 1] === undefined) {
//                 tmpArr.splice(i, 1);
//                 continue;
//             }
//             tmpArr.splice(i, 1, tmpArr[i + 1])
//         }
//         if (arr[i] === '--double-prev') {
//             if (tmpArr[i - 1] === undefined) {
//                 tmpArr.splice(i, 1);
//                 continue;
//             }
//             tmpArr.splice(i, 1, tmpArr[i - 1])
//         }
//     }
//     tmpArr = tmpArr.filter(function (x) {
//         return x !== 'undefined';
//     })
//     return tmpArr;
// }
/*
console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5])) //  [1, 2, 3, 4, 5]
console.log(transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5])) //  [1, 2, 3, 1337, 1337, 1337, 4, 5]
console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5])) //  [1, 2, 3, 4, 5]
console.log(transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5])) //[1, 2, 3, 1337, 4, 5]


*/
// function transform(arr) {
//     if (typeof arr === 'number'
//         || typeof arr === 'boolean'
//         || typeof arr === 'null'
//         || typeof arr === 'undefined'
//         || typeof arr !== 'object') {
//         return "THROWN";
//     }
//     let flag = 0;
//     let tmpArr = arr.map((index)=>index);
//     console.log(tmpArr)
//     let arrLength = arr.length;
//     if (tmpArr.length === 0) {
//         return tmpArr;
//     }
//     for (let i = 0; i < tmpArr.length; i++) {
//         if (tmpArr[i] === '--discard-next') {// deleted next
//             if (tmpArr[tmpArr.length-1]===tmpArr[i]) {
//                 delete tmpArr[i];
//             } else {
//                 delete tmpArr[i];
//                 delete tmpArr[i + 1];
//             }
//             continue;
//         }
//         if (tmpArr[i] === '--discard-prev') {// delete  prev
//             if (i === 0) {
//                 delete tmpArr[i];
//             } else {
//                 delete tmpArr[i];
//                 delete tmpArr[i - 1];
//             }
//             continue;
//         }
//         if (tmpArr[i] === '--double-next') {
//             if (tmpArr[i + 1] === undefined) {
//                 delete tmpArr[i];
//                 continue;
//             }
//             tmpArr.splice(i, 1, tmpArr[i + 1])
//             i++;
//             continue;
//         }
//         if (tmpArr[i] === '--double-prev') {
//             if (arr[i - 1] === undefined) {
//                 delete tmpArr[i];
//                 continue;
//             }
//             tmpArr.splice(i, 1, tmpArr[i - 1])
//
//
//         }
//     }
//     tmpArr = tmpArr.filter(function (x) {
//         return x !== undefined;
//     })
//     return tmpArr;
// };

// const chainMaker = {
//     chain: [],
//     getLength() {
//         return this.chain.length
//     },
//     addLink(value) {
//         this.chain.push(value);
//         return chainMaker;
//     },
//     removeLink(position) {
//         if(position > this.chain.length){
//             this.chain = []
//             throw 'Error';
//
//         }
//         if (!position instanceof Number) {
//             this.chain = []
//             throw 'Error';
//
//         }
//
//         if (position === 0) {
//             this.chain = []
//             throw 'Error';
//
//         }
//         this.chain.splice(position - 1, 1)
//         return chainMaker
//     },
//     reverseChain() {
//         this.chain = this.chain.reverse();
//         return chainMaker
//
//     },
//     finishChain() {
//         if (this.chain.length === 0) {
//             throw 'Error';
//         }
//         if (this.chain.length === 1 || this.chain.length < 2) {
//             this.chain[0] = '( ' + this.chain[0] + ' )'
//         }
//         if (this.chain.length > 1) {
//             this.chain[0] = '( ' + this.chain[0] + ' )'
//             for (let i = 1; i < this.chain.length; i++) {
//                 this.chain[i] = '~~( ' + this.chain[i] + ' )'
//             }
//
//         }
//         let temp = this.chain.join('')
//         this.chain = []
//         return temp
//     }
// };

//assert.deepEqual(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain(), '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )');

//RECURSIVE - DEPTH

// class DepthCalculator {
//
//     calculateDepth(arr) {
//         let borderS = 0;
//         let counterDeep = 0;
//         let tmp = localArr.length;
//         if (!arr instanceof Array) {
//             return 'Error'
//         }
//         let localArr = arr.splice()
//         if (localArr.length === 0) {
//             return 1
//         }
//         while (tmp > 0) {
//             tmp--;
//             borderS++
//             localArr = localArr.reduce( (level, el) => {
//                 if(Array.isArray(el)) level.push(...el);
//                 return level;
//             }, []);
//         }
//
//         return borderS
//
//
//     }
// };

//REPEATER
// ToDo

// function repeater(str, options ) {
//     let stroka;
//     if(str == null){
//         stroka = 'null';
//     }else{
//         stroka = str.toString().slice();
//     }
//     let countRepeat = options.repeatTimes
//     let separator;
//     let dopStroka;
//     if ('addition' in options){
//         if (options.addition == null){
//             dopStroka = 'null'
//         }else {
//             dopStroka = options.addition.toString().slice()
//         }
//     }
//     let dopStrokaRepeat = options.additionRepeatTimes
//     let dopStrokaSeparator;
//
//     let result = [];
//     let tmpArr = [];
//     resultCreate();
//     function resultCreate() {
//         result = stroka.split('');
//         if ('addition' in options){
//             tmpArr[0] = dopStroka;
//             if ('additionSeparator' in options){
//                 dopStrokaSeparator = options.additionSeparator.toString().slice()
//             }else{
//                 dopStrokaSeparator = '|';
//             }
//             if('additionRepeatTimes' in options && options.additionRepeatTimes !== undefined){
//                 for (let i = 1; i < dopStrokaRepeat; i++) {
//                     if (tmpArr.length<1){
//                         continue
//                     }else{
//                         tmpArr[i] = dopStrokaSeparator + dopStroka
//                     }
//                 }
//             }
//         }
//
//         tmpArr = tmpArr.join('').split('');
//         result = result.concat(tmpArr).join('');
//         tmpArr = [];
//         tmpArr[0]= result
//         if ('separator' in options){
//             separator  = options.separator.toString().slice()
//         }else{
//             separator = '+';
//         }
//
//         if('repeatTimes' in options && options.repeatTimes !== undefined){
//             for (let i = 1; i < countRepeat; i++) {
//                 if (tmpArr.length<1){
//                     continue
//                 }else{
//                     tmpArr[i] = separator + result
//                 }
//             }
//         }
//     }
//     return  tmpArr.join('')
// };