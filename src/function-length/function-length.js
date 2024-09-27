"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = functionLength;
function functionLength(fn) {
    return fn.length;
}
function foo() { }
function bar(x) { }
function baz(x, y) {
    if (x === void 0) { x = 0; }
    if (y === void 0) { y = 1; }
}
var fooLength = functionLength(foo);
var barLength = functionLength(bar);
var bazLength = functionLength(baz);
console.log(fooLength);
console.log(barLength);
console.log(bazLength);
