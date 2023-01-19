"use strict";
exports.__esModule = true;
exports.selectSmallest = void 0;
var selectSmallest = function (arr) {
    var arrLength = arr.length - 1;
    var smallest = arr[0];
    var smallestIndex = 0;
    for (var i = 1; i <= arrLength; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
};
exports.selectSmallest = selectSmallest;
