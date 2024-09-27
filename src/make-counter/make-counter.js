"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = makeCounter;
function makeCounter(initialValue) {
    if (initialValue === void 0) { initialValue = 0; }
    var count = initialValue - 1;
    var counter = function () {
        count = count + 1;
        return count;
    };
    return counter;
}
var counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
counter = makeCounter(5);
console.log(counter());
console.log(counter());
console.log(counter());
