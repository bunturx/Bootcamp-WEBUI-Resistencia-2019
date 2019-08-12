const Merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

const dev = function(env) {
    return Merge(common, {
        entry: '',
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