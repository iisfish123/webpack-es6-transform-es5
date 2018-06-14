'use strict';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
// process.env.BABEL_ENV = 'development';
// process.env.NODE_ENV = 'development';
// console.info(__dirname);//D:\vhost\webpack-es6-transform-es5\scripts
// return;


// var es6Code = 'let x = n => n + 1';
// var es5Code = require('babel-core')
//     .transform(es6Code, {
//         presets: ['es2015']
//     })
//     .code;
// return;

module.exports = {
    entry: path.resolve('../index'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query:{
                // presets:["env"]
            }
        }]
    },
    plugins:[
        new HtmlWebpackPlugin({
            inject:true,
            template:path.join('../public/','index.html')
        })
    ],
    devServer: {
        // contentBase: "",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    }
};

