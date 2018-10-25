var gulp = require('gulp');
var changed = require('gulp-changed');
var sass = require('gulp-sass');
var wait = require('gulp-wait');
var cssbeautify = require('gulp-cssbeautify');
var sourcemaps = require("gulp-sourcemaps");

// SASS File Directory and CSS Destination Directory
var SassSRC = './assets/sass/*.scss';
var SassDest = './css/';

// On Sass file Change
gulp.task('changed', function () {
    return gulp.src(SassSRC)
        .pipe(changed(SassDest))
        .pipe(gulp.dest(SassDest));
});

// SASS compilation
gulp.task('sass', function () {
    gulp.src(SassSRC)
        .pipe(wait(500))
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        // .pipe(cssbeautify({
        //     indent: '  ',
        //     openbrace: 'separate-line',
        //     autosemicolon: true
        // }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest(SassDest));
});

// Watch Task
gulp.task('watch', function () {
    gulp.watch(SassSRC, ['sass']);
});

// Default task when you run gulp command
gulp.task('default', ['sass', 'watch']);