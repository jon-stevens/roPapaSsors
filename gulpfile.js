'use strict';

let fs = require('fs'),
    gulp = require('gulp'),
    webpackConfig = require('./webpack.config.js'),
    webpackHelper = require('./webpackHelper'),
    livereload = require('gulp-livereload');

gulp.task('default', ['js:build']);

gulp.task('js:build', webpackHelper('js/app.js', webpackConfig()));

gulp.task('watch:js', function () {
    livereload.listen();
    let all = (ext) => `/**/*.${ext}`;
    gulp.watch('js' + all('js'), ['js:build']);
});
