'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	gutil = require('gulp-util'),
	plumber = require('gulp-plumber'),
	streamqueue = require('streamqueue'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	browserify = require('browserify'),
	source = require('vinyl-source-stream'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
    uglifycss = require('gulp-uglifycss');

gulp.task('copy-fontawsome-fonts', function () {
    return gulp.src('bower_components/font-awesome/fonts/**')
        .pipe(gulp.dest('static/fonts'));
});

gulp.task('copy-bootstrap-fonts', function () {
    return gulp.src('bower_components/bootstrap-sass/assets/fonts/bootstrap/**')
        .pipe(gulp.dest('static/fonts/bootstrap'));
});

gulp.task('copy-controllers-templates', function () {
    return gulp.src('frontend/controllers/tpl/**/*.html')
        .pipe(gulp.dest('static/tpl/controllers'));
});

gulp.task('copy-directives-templates', function () {
    return gulp.src('frontend/controllers/tpl/**/*.html')
        .pipe(gulp.dest('static/tpl/directives'));
});

gulp.task('build-css', function () {
    return gulp.src('frontend/sass/style.scss')
        .pipe(sourcemaps.init())
        .pipe(plumber(function (error) {
            gutil.log(gutil.colors.red(error.message));
            this.emit('end');
        }))
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('static/css'));
});

gulp.task('build-js', function () {
    return browserify('frontend/app.js')
        .bundle()
        .on('error', function (error) {
            console.log(error.toString());
            this.emit('end');
        })
        .pipe(source('app.js'))
        .pipe(gulp.dest('static/js/'));
});

gulp.task('watch',
    [
        'build-all'
    ],
    function () {
        gulp.watch('frontend/sass/**/*.scss', ['build-css']);
        gulp.watch('frontend/controllers/tpl/**/*.html', ['copy-controllers-templates']);
        gulp.watch('frontend/directives/tpl/**/*.html', ['copy-directives-templates']);
        gulp.watch('frontend/**/*.js', ['build-js']);
    });

gulp.task('build-all',
    [
        'copy-bootstrap-fonts',
        'copy-fontawsome-fonts',
        'copy-controllers-templates',
        'build-css',
        'build-js'
    ]
);