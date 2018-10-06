"use strict";

var _treeShakingNpmModuleDemo = require("tree-shaking-npm-module-demo");

console.log(_treeShakingNpmModuleDemo.a, _treeShakingNpmModuleDemo.b);

//参考：https://github.com/webpack/webpack/tree/master/examples/side-effects
//tree-shaking-npm-module-demo@1.0.0-a2 和 "big-module" 本质上是一致的