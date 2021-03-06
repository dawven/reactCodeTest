- react 16.8.3

## hooks

为什么要搞一个Hook？
- 我们敲过react代码的都会发现，我们都知道react都核心思想就是，将一个页面拆成一堆独立的，可复用的组件，并且用自上而下的单向数据流的形式将这些组件串联起来。但假如你在大型的工作项目中用react，你会发现你的项目中实际上很多react组件冗长且难以复用。尤其是那些写成class的组件，它们本身包含了状态（state），所以复用这类组件就变得很麻烦。
以前的做法就是高阶组件不断抽象出来以及本身渲染属性props二者来解决state数据多的复杂问题。

- 还有一个问题是react生命周期函数里面的逻辑太乱了，我们通常希望一个函数只做一件事情，但我们的生命周期钩子函数里通常同时做了很多事情。比如我们需要在 componentDidMount中发起ajax请求获取数据，绑定一些事件监听等等。同时，有时候我们还需要在 componentDidUpdate做一遍同样的事情。当项目变复杂后，这一块的代码也变得不那么直观。

- class的this指向问题比较烦人，class里面的按钮之类的必须绑定对应自己的类。

- 其次就是尽可能把你的组件写成无状态组件的形式，因为它们更方便复用，可独立测试。然而很多时候，我们用function写了一个简洁完美的无状态组件，后来因为需求变动这个组件必须得有自己的state，我们又得很麻烦的把function改成class。

#### useState

相对于以前，类class存在props和state，而有了hook，可以在函数里面注入hook-useState,让函数也变成有状态。

Hooks本质上就是一类特殊的函数，它们可以为你的函数型组件（function component）注入一些特殊的功能。

useState是react自带的一个hook函数，它的作用就是用来声明状态变量。 useState这个函数接收的参数是我们的状态初始值（initial state），它返回了一个数组，这个数组的第 [0]项是当前当前的状态值，第 [1]项是可以改变状态值的方法函数。

所以我们做的事情其实就是，声明了一个状态变量count，把它的初始值设为0，同时提供了一个可以更改count的函数setCount。

#### useEffect


