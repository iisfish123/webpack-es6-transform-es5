'use strict';
const path = require('path');
// process.env.BABEL_ENV = 'development';
// process.env.NODE_ENV = 'development';
// console.info(process.env.NODE_ENV);

const webpack = require('webpack');
webpack({
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
});
// module.exports = ;

