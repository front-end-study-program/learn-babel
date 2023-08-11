import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.array.from.js";
import "core-js/modules/es.string.iterator.js";
var fn = function fn(a, b) {
  return a + b;
};
export function addAll() {
  return Array.from(arguments).reduce(function (a, b) {
    return a + b;
  });
}
var Foo = /*#__PURE__*/function () {
  function Foo() {
    _classCallCheck(this, Foo);
  }
  _createClass(Foo, [{
    key: "method",
    value: function method() {}
  }]);
  return Foo;
}();