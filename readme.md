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
- [x] 使用 `react hooks`~~简单的使用了一下~~已完全转用`hooks`;
- [x] 使用 `styled-components`~~除 `reset css` 外已抛弃~~;
- [ ] 添加 `ESlint`做代码风格约束;
- [ ] 增加状态管理系统;
- [ ] 增加路由处理系统;
- [ ] 单元测试;
- [x] 增加了一个简单的按钮组件;
  - [ ] 增加更多的 props 和更好的动画效果;
- [x] 封装一个简单的模态对话框组件;
  - [x] 完成对话框功能;
  - [ ] 方法调用;
- [ ] 对一些用到的原生组件进行二次封装;
- [ ] 优化样式;

# 上手体验

## 初体验感觉

事实上一上手就想试试`React Hooks`,但没有`Vue Composition api`的生命周期管理那么显而易见,搞的自己有点复杂;

搜索引擎查阅后发现实际上`React Hooks`在生命周期的处理上非常隐晦,不如`Vue`的`onMounted()`这样更好理解.

但 Class 写法事实上体验非常像`option api`,逻辑转移过来完全没有负担.但目标的`hooks`并没有 vue 给我带来的惊艳和使用舒适度.

不过这个`styled-component`真的好用吗，感觉如果样式复杂之后维护的体验也不会很好,或者是我没找到使用的真谛？

## 双向数据绑定和单向数据流

这分别指的`Vue`和`React`,这两框架的不一样的特性使得组件开发的效率和便捷度都不太一样.

对于一个简单的模态框组件,其显隐状态肯定是收到外部控制.

而`Vue`端能够以自定义事件的方式与父组件进行交互,甚至有一些语法糖让双向的数据控制更简便

来到`React`这边,对于从父组件接入的属性,只能够使用回调的方式使父组件中该状态变化。

从这方面来看二者除了部分`api`设置上能够找到共同点——无论是`React Class`和声明式的`Option Api`或是`Hooks`与`Composition api`,但其设计思维是完全不同的.

但能够掌握其一的开发者确实能够较为快速的掌握另一方,这种体验还是逃脱不了它们本质还是 js 的各式各样的封装.

## React 内部 `state` 及其异步的 `setState()`

### state

1. 一个 react 的 Class 组件其内部的 state 默认是 immutable 即不可变的,所以在需要更改一个 state 的时候会使用 setState()进行变更;
2. 一个组件的 state 一般不允许被外部通过组件示例访问~~Class 组件在通过父组件传入函数可以将实例化的本身赋值给父组件共调用~~;
3. 在 React 自顶向下的数据流中每个组件维护的 state 只能允许影响到其子组件;
4. 内部 state 改变会引发 `shouldComponentUpdate` 生命周期~~此生命周期即将改名并弃用~~

### setState()

1. 可以异步的改变组件内部的 state,但同时多次更改将会被 react 合并,并且该方法为异步,递归中调用参数应使用函数形式;
2. 会修改 state 即能引发 `shouldComponentUpdate` 生命周期

## 生命周期 [@see](https://www.bilibili.com/read/cv9056199)

首先 `React v16.3` 之前拥有 `componentWillMount`、`componentDidMount`、`shouldComponentUpdate`、`componentWillUpdate`、`componentDidUpdate`、`componentWillUnmount`等生命周期函数

但在`v16.3`之后新增了两个`getDerivedStateFromProps`、`getSnapshotBeforeUpdate`以及废弃了三个`componentWillMount`、`componentWillUpdate`、`componentWillUnmount`

首先无论是之前还是之后，大致生命周期还是分为三个部分为

1. 挂载时
2. 更新时
3. 卸载时
