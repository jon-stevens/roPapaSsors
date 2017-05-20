'use strict';
let gulp = require('gulp'),
    webpackStream = require('webpack-stream'),
    named = require('vinyl-named');

module.exports = function (src, webpackConfig) {
    return () => {
        return gulp.src(src)
            .pipe(named())
            .pipe(webpackStream(webpackConfig))
            .pipe(gulp.dest('public/js'));
    }
};
