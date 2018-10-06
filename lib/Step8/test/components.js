'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = exports.Person = function () {
  function Person(_ref) {
    var name = _ref.name,
        age = _ref.age,
        sex = _ref.sex;

    _classCallCheck(this, Person);

    this.className = 'Person';
    this.name = name;
    this.age = age;
    this.sex = sex;
  }

  _createClass(Person, [{
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }]);

  return Person;
}();

var Apple = exports.Apple = function () {
  function Apple(_ref2) {
    var model = _ref2.model;

    _classCallCheck(this, Apple);

    this.className = 'Apple';
    this.model = model;
  }

  _createClass(Apple, [{
    key: 'getModel',
    value: function getModel() {
      return this.model;
    }
  }]);

  return Apple;
}();