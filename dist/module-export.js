"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dirname = exports.설마_이것도 = exports.요것도_오케이 = exports.이렇게도_가능 = exports.ThisIsPublicClass = exports.ThisIsPublicFunction = exports.NON_SECRET_STRING = void 0;
const SECRET_STRING = '이건 공개되면 안돼!';
const NON_SECRET_STRING = '이건 공개해야해.';
exports.NON_SECRET_STRING = NON_SECRET_STRING;
function ThisIsPrivateFunction() {
}
function ThisIsPublicFunction() {
    console.log('ThisIsPublicFunction');
}
exports.ThisIsPublicFunction = ThisIsPublicFunction;
class ThisIsPrivateClass {
}
class ThisIsPublicClass {
}
exports.ThisIsPublicClass = ThisIsPublicClass;
exports.이렇게도_가능 = 'string';
function 요것도_오케이() {
}
exports.요것도_오케이 = 요것도_오케이;
class 설마_이것도 {
    말해() {
        console.log('설마 이것도 말해');
    }
}
exports.설마_이것도 = 설마_이것도;
// proxy export pattern 1
__exportStar(require("fs"), exports);
// proxy export pattern 2
var path_1 = require("path");
Object.defineProperty(exports, "dirname", { enumerable: true, get: function () { return path_1.dirname; } });
function defaultFunction() {
    console.log('defaultFunction');
}
exports.default = defaultFunction;
