var webpack = require('webpack'),
    path = require('path');
    
module.exports = {
    debug: true,
    entry: {
        todo1: './app/todo1/index',
        vendor1: ["angular"]
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.tsx']  
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'webpack-typescript?target=es5&jsx=react'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor1", /* filename= */"vendor1.bundle.js")
    ]
};