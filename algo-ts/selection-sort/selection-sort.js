"use strict";
exports.__esModule = true;
exports.selectionSort = void 0;
var select_smallest_1 = require("./select-smallest");
var selectionSort = function (arr) {
    var arrLength = arr.length;
    var sortedArr = [];
    for (var i = 0; i < arrLength; i++) {
        var smallestIndex = (0, select_smallest_1.selectSmallest)(arr);
        sortedArr.push(arr.splice(smallestIndex, 1)[0]);
    }
    return sortedArr;
};
exports.selectionSort = selectionSort;
