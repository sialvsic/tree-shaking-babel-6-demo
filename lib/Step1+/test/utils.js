'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEntry = getEntry;

var _entry = require('./entry.js');

var _entry2 = _interopRequireDefault(_entry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fn() {
  console.log('fn');
  return (0, _entry2.default)().name;
}

function fn1() {
  console.log('fn1');
  return (0, _entry2.default)().name;
}

function getEntry() {
  console.log('getEntry');
  return 'getEntry';
}