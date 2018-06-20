# webpack-es6-transform-es5
webpack转换，并打包单一入口文件

"scripts": {
    "start": "cd scripts && set NODE_ENV=development && webpack-dev-server --inline --port 9091",
    "build": "node scrpits/build.js"
}
npm start相当于执行后面的cd scripts && set NODE_ENV=development && webpack-dev-server --inline --port 9091

#### 什么是shell?
shell就是系统内核的一层壳，作用是用来保护内核同时传递人与计算机交互的信息。
它只是系统的一个工具，我们可以 使用它来操作计算机。

npm脚本，唯一要求是可以在shell执行

而&& 就是并且的意思，分隔两段命令行

由于webpack.config.js不和package.json不在同一个目录，所以需要先cd scripts

webpack 和 webpack-dev-server的区别
webpack只是构建
webpack-dev-server除了构建，还提供web服务

webpack-dev-server --inline和webpack-dev-server --iframe区别

访问
http://localhost:9091/webpack-dev-server/index.html
http://localhost:9091/index.html
http://localhost:9091/bundle.js



babel转译器的相关模块：

babel-cli：
作用大概能在命令行直接babel index.js的功能。当然也能指定输出到某个文件或者目录
详情看阮一峰http://www.ruanyifeng.com/blog/2016/01/babel.html

babel-loader：
webpack的loader，不解释

babel-preset-es2015:
还有如下这些
babel-preset-es2015 将es2015版本的js转译为es5。
babel-preset-es2016 将es2016版本的js转译为es5。
babel-preset-es2017 将es2017版本的js转译为es5。
在转译过程中遇到更高版本的js语法，babel是会直接忽略的。

babel-core:
使用失败，硬是不知道怎么用，不过这东西好像也没什么作用

babel-polyfill:
Babel默认只转换新的JavaScript句法（syntax），而不转换新的API，比如
Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，
以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。

用法，在入口模块import 'babel-polyfill';
babel-polyfill的原理：是由于低版本浏览器没有例如Promise这样的全局对象，所以babel-polyfill会给浏览器
强行造一个Promise全局对象，所以这个babel-polyfill存在全局变量污染的危险。

.babelrc文件
babel的配置文件，
特点之一，倒序转译

