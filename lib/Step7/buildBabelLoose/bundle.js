"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var o = t[r] = { i: r, l: !1, exports: {} };
    return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var o in e) {
      n.d(r, o, function (t) {
        return e[t];
      }.bind(null, o));
    }return r;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 0);
}([function (e, t, n) {
  e.exports = n(1);
}, function (e, t, n) {
  "use strict";

  var r = new (n(2).Apple)({ model: "IphoneX" }).getModel();
  console.log(r);
}, function (e, t, n) {
  "use strict";

  function r(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }

  t.__esModule = !0;
  t.Person = function () {
    function e(t) {
      var n = t.name,
          o = t.age,
          u = t.sex;
      r(this, e), this.className = "Person", this.name = n, this.age = o, this.sex = u;
    }

    return e.prototype.getName = function () {
      return this.name;
    }, e;
  }(), t.Apple = function () {
    function e(t) {
      var n = t.model;
      r(this, e), this.className = "Apple", this.model = n;
    }

    return e.prototype.getModel = function () {
      return this.model;
    }, e;
  }();
}]);