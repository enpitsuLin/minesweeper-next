# 开始之前

之前的专科的毕业设计项目——HTMl 扫雷是一个 `Jquery` 版本 + 一个后来闲的没事重构的 `Vue2 Option api` 版本;

本科毕业走上社会后,在最近生产中夹带私货上了 `Vue3 + TS + Composition api` 体验非常好,~~有完整的代码提示谁不爱呢？~~;

甚至把一些老项目 也整上了 `Composition api`,撸重复度高的业务代码真的是快的不行;

本来就很喜欢 FP,使用过了组合式 api 后对这种逻辑复用的实现方式真的是爱不释手,写供业务复用的 HOC 在设计的奇葩设计理念下也是累的不行;

既然都接触了`Composition api`,那么接着尝试下 React,看看这个被模仿的 `Hook`到底是什么东西;

顺便整一个自己用的模板,并试试 react 项目实践方案是不是真的有那么多种.

# 重构扫雷项目

目标是首先脱离源代码去完全复现原来的项目,原项目的实现逻辑和样式代码都很简单,看着界面就能完全重写.

然后为了入门 react,遵循其渐进式的策略,可能会才去先使用 `Classes Component` 进行构建;

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
- [x] 使用 `styled-components`;
- [ ] 单元测试;

# 上手体验

## 初体验感觉

事实上一上手就想试试`React Hooks`,但没有`Vue Composition api`的生命周期管理那么显而易见,搞的自己有点复杂;

搜索引擎查阅后发现实际上`React Hooks`在生命周期的处理上非常隐晦,不如`Vue`的`onMounted()`这样更好理解.

但 Class 写法事实上体验非常像`option api`,逻辑转移过来完全没有负担.但目标的`hooks`并没有 vue 给我带来的惊艳和使用舒适度.

不过这个`styled-component`真的好用吗，感觉如果样式复杂之后维护的体验也不会很好,或者是我没找到使用的真谛？
