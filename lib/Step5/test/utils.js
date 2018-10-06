'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLast = getLast;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getLast(string) {
  console.log('getLast');
  return _lodash2.default.last(string);
}