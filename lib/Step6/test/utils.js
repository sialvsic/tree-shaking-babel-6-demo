'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.array = array;
exports.Add = Add;

var _lodashEs = require('lodash-es');

function array(array) {
  console.log('isArray');
  return (0, _lodashEs.isArray)(array);
}

function Add(a, b) {
  console.log('Add');
  return a + b;
}