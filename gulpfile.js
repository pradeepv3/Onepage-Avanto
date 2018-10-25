var gulp = require('gulp');

//var jslint = require("gulp-jshint");
var changed = require('gulp-changed');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var sourcemaps = require("gulp-sourcemaps");

var SassSRC = './assets/sass/*.scss';
var SassDest = './assets/css/';

var cssSrc = './assets/css/*.css';
var cssSrcDest = './css/';

var jsSRC = './assets/js/*.js';
var jsDest = './js/'

// gulp.task("default", function(){
//     gulp.src('./js/script.js')
//     .pipe(jslint())
//     .pipe(jslint.reporter('default'))
// });

gulp.task('changed', function () {
    return gulp.src(SassSRC)
        .pipe(changed(SassDest))
        .pipe(gulp.dest(SassDest));
});

gulp.task('uglify', function () {
    gulp.src(jsSRC)
        .pipe(uglify())
        //.pipe(gulp.dest(jsDest))
        .pipe(rename(function (path) {
            path.basename += ".min";
        }))
        .pipe(gulp.dest(jsDest))
});

gulp.task('sass', function () {
    gulp.src(SassSRC)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(SassDest))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest(SassDest));
});

gulp.task('cleancss', () => {
    return gulp.src(cssSrc)
        .pipe(cleanCSS({
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
});

gulp.task('watch', function () {
    gulp.watch(SassSRC, ['sass']);
    gulp.watch(cssSrc, ['cleancss']);
    gulp.watch(jsSRC, ['uglify']);
});

gulp.task('default', ['sass', 'watch', 'uglify', 'cleancss']);