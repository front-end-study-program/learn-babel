# learn-babel

## babel 基本的预设和插件的作用

1. 配置

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        // 设置目标环境
        "targets": {
          "browsers": [
            "last 2 versions",
            "ie >= 11"
          ]
        },
        "modules": false, // 用于配置对模块化的转换
        "useBuiltIns": "usage", // 用于控制是否自动引入 polyfill，开启这个需要配置对应 corejs 的版本
        "corejs": 3 // 用于配置对 corejs 的版本
      }
    ],
  ],
  "plugins": [
    // 用于将代码中的高级语法转换为对运行时的引用，以减少代码的冗余和重复
    // 就不需要把 _classCallCheck 和 _createClass 这两个助手方法放进每一个需要的文件里去了
    "@babel/plugin-transform-runtime"
  ]
}
```

2. 代码转换前

```js
const fn = (a, b) => a + b

export function addAll() {
  return Array.from(arguments).reduce(function(a, b) {
    return a + b;
  });
}

class Foo {
  method() {}
}
```

3. 代码转换后


```js
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
```

## babel 进阶