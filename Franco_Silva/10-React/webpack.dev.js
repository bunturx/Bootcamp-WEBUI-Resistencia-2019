const Merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
require('@babel/polyfill');

const dev = function(env) {
    return Merge(common, {
        entry: {
            main: [
                '@babel/polyfill',
                './src/App.jsx'
            ]
        },
        output: {
            path: path.resolve(__dirname, 'dev'),
            filename: 'bundle.js',
            publicPath: 'assets'
        },
        devServer: {
            port: 2202,
            historyApiFallback: true
        }
    })
}

module.exports = dev();