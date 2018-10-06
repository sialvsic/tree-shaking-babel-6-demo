'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.square = square;
exports.cube = cube;
function square(x) {
  console.log('square');
  return x * x;
}

function cube(x) {
  console.log('cube');
  return x * x * x;
}