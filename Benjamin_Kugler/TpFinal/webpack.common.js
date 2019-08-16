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
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: ["@babel/plugin-transform-runtime"]
            }
        },
        {
            test: /\.css?$/,
            loader: combineLoaders([{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }])
        },
        {
            test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
            loader: 'url-loader?limit=100000'
        }
    ]}
}