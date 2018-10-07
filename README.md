# What is this?
这是一个探究学习Webpack tree shaking原理的一个代码库，原文请见：[Webpack Tree shaking 深入探究](https://juejin.im/post/5bb8ef58f265da0a972e3434)

该项目列举了Tree shaking原理的每一部分的代码实现:

- Step1: Webpack Tree-shaking从ES6顶层模块开始分析，可以清除未使用的模块(官方的基本示例)
- Step1+: Webpack Tree-shaking无法删除代码的示例
- Step2: Webpack Tree-shaking会对多层调用的模块进行重构，提取其中的代码，简化函数调用结构
- Step3: Webpack Tree-shaking不会清除IIFE(立即调用函数表达式)
- Step4: Webpack Tree-shaking对于IIFE的返回函数，如果未使用会被清除
- Step5: Webpack Tree-shaking结合第三方包使用
- Step6: Webpack Tree-shaking做不到的事情
  - 未使用WebpackDeepScopeAnalysisPlugin
  - 使用使用WebpackDeepScopeAnalysisPlugin
- Step7: Webpack Tree-shaking结合Babel使用
  - 无Babel
  - 有Babel
  - 有Babel+loose
- Step8: Webpack Tree-shaking sideEffect(详见：https://github.com/sialvsic/tree-shaking-npm-module-demo/tree/master#branch)
  - tree-shaking-npm-module-demo(@1.0.0-a2)
  - tree-shaking-npm-module-demo(@1.0.0-b3)
  - tree-shaking-npm-module-demo(@1.0.0-c1)
- Step9: 官方的Webpack Tree-shaking的例子(参考：https://github.com/webpack/webpack/tree/master/examples/side-effects)

安装：
```
npm install
```

构建：
```bash
npm run build-step-1
npm run build-step-1+
npm run build-step-2
npm run build-step-3
npm run build-step-4
npm run build-step-5
npm run build-step-6
npm run build-step-7
npm run build-step-7-babel
npm run build-step-7-babel-loose
npm run build-step-8
npm run build-step-9
```
