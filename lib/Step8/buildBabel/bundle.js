"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e) {
  var n = {};function t(r) {
    if (n[r]) return n[r].exports;var o = n[r] = { i: r, l: !1, exports: {} };return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
  }t.m = e, t.c = n, t.d = function (e, n, r) {
    t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: r });
  }, t.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
  }, t.t = function (e, n) {
    if (1 & n && (e = t(e)), 8 & n) return e;if (4 & n && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e && e.__esModule) return e;var r = Object.create(null);if (t.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & n && "string" != typeof e) for (var o in e) {
      t.d(r, o, function (n) {
        return e[n];
      }.bind(null, o));
    }return r;
  }, t.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };return t.d(n, "a", n), n;
  }, t.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, t.p = "", t(t.s = 0);
}([function (e, n, t) {
  e.exports = t(1);
}, function (e, n, t) {
  "use strict";
  var r = new (t(2).Apple)({ model: "IphoneX" }).getModel();console.log(r);
}, function (e, n, t) {
  "use strict";
  Object.defineProperty(n, "__esModule", { value: !0 });var r = function () {
    function e(e, n) {
      for (var t = 0; t < n.length; t++) {
        var r = n[t];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }return function (n, t, r) {
      return t && e(n.prototype, t), r && e(n, r), n;
    };
  }();function o(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
  }n.Person = function () {
    function e(n) {
      var t = n.name,
          r = n.age,
          u = n.sex;o(this, e), this.className = "Person", this.name = t, this.age = r, this.sex = u;
    }return r(e, [{ key: "getName", value: function value() {
        return this.name;
      } }]), e;
  }(), n.Apple = function () {
    function e(n) {
      var t = n.model;o(this, e), this.className = "Apple", this.model = t;
    }return r(e, [{ key: "getModel", value: function value() {
        return this.model;
      } }]), e;
  }();
}]);