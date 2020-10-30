const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
        let count = 0;
        if (matrix.length === 0) {
            return 0;
        }
        for (let j = 0; j < matrix.length; j++) {
            for (let i = 0; i < matrix[j].length; i++) {
                if (matrix[j][i] === '^^') {
                    count++;
                }
            }
        }
        return count;

};
