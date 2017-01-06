import webpack from 'webpack';
import path from 'path';

export default {
    entry: {
        app: ['./src/index.js']
    },
    output: {
        path: path.join(__dirname) + '/.dist/',
        filename: '[name].bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel?sourceMap&presets[]=es2015'
        }]
    },
    watch: true,
    colors: true
};