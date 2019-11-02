const gulp = require('gulp');
const sass = require('gulp-sass');
const wait = require('gulp-wait');
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require('browser-sync').create();
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
var cssSrcDest = './css/';

// Js File Directory and Js Destination Directory
var JsSRC = ['./assets/js/**/*.js'];
var JsDest = './js/';



function style() {
    return gulp.src(SassSRC)
        .pipe(wait(500))
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefix())
        .pipe(sourcemaps.write('../../css/maps'))
        .pipe(cssbeautify({
          indent: '  ',
          openbrace: 'separate-line',
          autosemicolon: true
        }))
        .pipe(gulp.dest(SassDest))
        
        .pipe(browserSync.stream());
}

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
		.pipe(gulp.dest(cssSrcDest));
}

function compresser() {
	return gulp.src(JsSRC)
    .pipe(uglify())
		.pipe(gulp.dest(JsDest))
		.pipe(rename(function (path) {
			path.basename += ".min";
    }))
		.pipe(gulp.dest(JsDest))
}

function watch() {
    gulp.watch(SassSRC, style);
    gulp.watch(cssSrc, cleancss)
    gulp.watch(JsSRC, compresser);
}

gulp.task('default', watch)