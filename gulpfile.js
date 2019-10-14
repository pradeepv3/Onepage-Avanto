const gulp = require('gulp');
const sass = require('gulp-sass');
const wait = require('gulp-wait');
//var cssbeautify = require('gulp-cssbeautify');
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require('browser-sync').create();
const autoprefix = require('gulp-autoprefixer');

// SASS File Directory and CSS Destination Directory
var SassSRC = './assets/sass/*.scss';
var SassDest = './css/';

const paths = {
    sass: './assets/sass/*.scss',
};

const config = {
  styles: {
    browsers: [
      'ie 11',
      'edge >= 16',
      'chrome >= 70',
      'firefox >= 63',
      'safari >= 11',
      'iOS >= 13',
      'ChromeAndroid >= 70',
    ]
  }
};


function style() {
    return gulp.src(SassSRC)
        .pipe(wait(500))
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefix( {overrideBrowserslist: config.styles.browsers} ))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest(SassDest))
        
        .pipe(browserSync.stream());
}

function watch() {
    gulp.watch(SassSRC, style);
}

gulp.task('default', watch)

// exports.style = style;
// exports.watch = watch;