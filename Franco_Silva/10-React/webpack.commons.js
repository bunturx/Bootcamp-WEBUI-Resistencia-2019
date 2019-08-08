const path = require ('path');

module.exports = {
    entry: '',
    module : {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel.loader',
            query: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
        }]
    }
}