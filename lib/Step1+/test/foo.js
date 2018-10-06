'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.foo1 = foo1;
function foo1() {
  console.log('foo1');
}

var identity = function identity(f) {
  return f;
};

var foo2 = identity(function () {
  console.log('foo2');
});

exports.foo2 = foo2;


function fn() {
  console.log('fn');
}

function foo3(fn) {
  return fn;
}