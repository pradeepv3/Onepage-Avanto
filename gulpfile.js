const gulp = require('gulp');
const sass = require('gulp-sass');
const wait = require('gulp-wait');
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const autoprefix = require('gulp-autoprefixer');
const uglify = require("gulp-uglify");
const cssbeautify = require('gulp-cssbeautify');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const gulpif = require('gulp-if');

// SASS File Directory and CSS Destination Directory
var SassSRC = './assets/sass/*.scss';
var SassDest = './assets/css/';

var cssSrc = './assets/css/**/*.css';
var cssSrcDest = './src/css/';

// Js File Directory and Js Destination Directory
var JsSRC = ['./assets/js/**/*.js'];
var JsDest = './src/js/';

// Sass Compiler
function style() {
    return gulp.src(SassSRC)
        .pipe(wait(500))
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefix())
        .pipe(sourcemaps.write('../../src/css/maps'))
        .pipe(cssbeautify({
            indent: '  ',
            openbrace: 'separate-line',
            autosemicolon: true
        }))
        .pipe(gulp.dest(SassDest))

        .pipe(browserSync.stream());
}

// CSS Minifier
function cleancss() {
    return gulp.src(cssSrc)
        .pipe(wait(700))
        .pipe(cleanCSS({
            debug: true,
            rebase: false,
            level: {
                1: {
                    specialComments: 0
                }
            }
        }))
        .pipe(rename(function (path) {
            path.basename += ".min";
        }))
        .pipe(gulp.dest(cssSrcDest))
        .pipe(browserSync.stream());
}

function compresser() {
    return gulp.src(JsSRC)
        .pipe(uglify())
        .pipe(rename(function (path) {
            path.basename += ".min";
        }))
        .pipe(gulp.dest(JsDest))
        .pipe(browserSync.stream());
}

function browserRelaod() {
    browserSync.init({
        proxy: "http://localhost/avanto/src"
    })
}

function watch() {
    gulp.watch(SassSRC, style);
    gulp.watch(cssSrc, cleancss);
    gulp.watch(JsSRC, compresser);
}

var build = gulp.parallel(style, cleancss, compresser, browserRelaod, watch);

gulp.task('default', build);