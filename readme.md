# 开始之前

之前的专科的毕业设计项目——HTMl 扫雷是一个 `Jquery` 版本 + 一个后来闲的没事重构的 `Vue2 Option api` 版本;

本科毕业走上社会后,在最近生产中夹带私货上了 `Vue3 + TS + Composition api` 体验非常好,~~有完整的代码提示谁不爱呢？~~;

甚至把一些老项目 也整上了 `Composition api`,撸重复度高的业务代码真的是快的不行;

本来就很喜欢 FP,使用过了组合式 api 后对这种逻辑复用的实现方式真的是爱不释手,写供业务复用的 HOC 在设计的奇葩设计理念下也是累的不行;

既然都接触了`Composition api`,那么接着尝试下 React,看看这个被模仿的 `Hook`到底是什么东西;

顺便整一个自己用的模板,并试试 react 项目实践方案是不是真的有那么多种。

# 重构扫雷项目

目标是首先脱离源代码去完全复现原来的项目,原项目的实现逻辑和样式代码都很简单,看着界面就能完全重写。

然后为了入门 react,遵循其渐进式的策略,可能会才去先使用 `Classes Component` 进行构建；

了解这部分再使用相对比较熟悉的 `hooks` 方式

# React + Typescript webpack 模板

目前仅使用 webpack + react + typescript 搭建

- [x] 使用 `Webpack` 进行打包以及开发时的实时调试 `Web` 服务器
- [x] 使用 `Babel` 进行语法转换;
- [x] 目录结构按照 `Vue` 的习惯构建;
- [ ] 添加 `ESlint`做代码风格约束;
- [ ] 使用 `react hooks`;
- [ ] 增加状态管理系统;
- [ ] 增加路由处理系统;
- [ ] 使用 `styled-components`;
- [ ] 单元测试;
