"use strict";

let path = require('path');

module.exports = function (config) {

    config.set({
        browsers: ['Chrome'],
        files: [
            'node_modules/es7-shim/dist/es7-shim.min.js',
            {pattern: './tests.webpack.js', watched: false}
        ],
        frameworks: ['jasmine', 'es6-shim', 'fixture'],
        preprocessors: {
            './tests.webpack.js': ['webpack', 'sourcemap']
        },
        reporters: ['progress', 'html'],
        htmlReporter: {
            outputFile: './build/reports/index.html',

            // Optional
            pageTitle: 'Unit Tests'
        },
        singleRun: true,
        webpack: {
            devtool: '#inline-source-map',
            module: {
                loaders: [{
                    test: /\.js$/,
                    loader: 'ng-annotate?add=true!babel',
                    exclude: /node_modules/
                },
                    {test: /\.html$/, loader: 'html-loader'},
                    {test: /\.hbs/, loader: 'handlebars-loader'},
                    {test: /\.json$/, loader: 'json-loader', exclude: /node_modules/}
                ]
            },
            plugins: [],
            watch: true,
            resolve: {
                root: [
                    path.resolve('src/main/js')
                ]
            }
        },
        webpackServer: {
            noInfo: true
        }
    });
};
