'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cube = cube;
var square = function () {
  console.log('square');
  return function () {
    console.log('square return');
  };
}();

function getSquare() {
  console.log('getSquare');
  square();
}

function cube(x) {
  console.log('cube');
  return x * x * x;
}