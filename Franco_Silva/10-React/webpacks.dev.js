const Merge = require ('webpack-merge');
const Common = require ('./webpack.commons.js');
const path = require ('path');

const dev = function (env) {
    return Merge (Common, {
        entry: './src/app.jsx',
        output: {
            path: path.resolve (__dirname, 'dev'),
            filename: 'bundle.js',
            publicPath: 'assets'
        },
        devServer: {
            port:1696,
            historyApiFallback: true
        }
    })
}

module.exports =dev ();