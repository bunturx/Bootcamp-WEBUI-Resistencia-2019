const path = require('path');
const combineLoaders = require('webpack-combine-loaders');
module.exports = {
    entry: '',
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
        },{
            test: /\.css?$/,
            loader: combineLoaders([{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }])
        }]
    }
}