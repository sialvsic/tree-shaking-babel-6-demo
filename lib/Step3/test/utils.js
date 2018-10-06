'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cube = cube;
var square = function (x) {
  console.log('square');
}();

function cube(x) {
  console.log('cube');
  return x * x * x;
}