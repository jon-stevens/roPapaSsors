"use strict";

let path = require('path'),
    webpack = require('webpack');

module.exports = function () {
    var config = {
        output: {
            filename: '[name].bundle.js'
        },
        module: {
            preLoaders: [],
            loaders: [{
                test: /\.js$/,
                loader: 'ng-annotate?add=true!babel',
                exclude: /node_modules/
            }, {
                test: /\.html/,
                loader: 'html-loader'
            },
                {test: /\.json$/, loader: 'json-loader', exclude: /node_modules/}
            ]
        },
        plugins: [
            new webpack.optimize.DedupePlugin(),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            })
        ],
        resolve: {
            root: [
                path.resolve('/js/app.js')
            ],
            extensions: ['', '.js']
        },
        sassLoader: {
            includePaths: [path.resolve(__dirname, `scss`)]
        }
    };



    return config;
};
