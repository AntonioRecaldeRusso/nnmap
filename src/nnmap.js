"use strict";
exports.__esModule = true;
function defaultQCB(item) {
    return false;
}
function nnmap(arr, cb, qcb) {
    if (qcb === void 0) { qcb = defaultQCB; }
    var returnedArray = [];
    var value = null;
    for (var i = 0; i < arr.length; i++) {
        value = cb(arr[i]);
        if (value)
            returnedArray.push(value);
        if (qcb(arr[i]))
            break;
    }
    return returnedArray;
}
exports["default"] = nnmap;
