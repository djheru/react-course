"use strict"

var gulp = require('gulp');
var connect = require('gulp-connect'); //Run a local server
var open = require('gulp-open'); //open browser
var browserify = require('browserify'); //Bundle JS
var reactify = require('reactify'); //Transform JSX to JS
var source = require('vinyl-source-stream'); //Use text streams with gulp
var concat = require('gulp-concat'); //concatenates files
var lint = require('gulp-eslint'); //linting


var config = {
  port: 4000,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    js: './src/**/*.js',
    images: './src/images/*',
    css: [
      './node_modules/bootstrap/dist/css/bootstrap.min.css',
      './node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
      './node_modules/toastr/build/toastr.css'
    ],
    dist: './dist',
    mainJs: './src/main.js'
  }
};

//start a local server
gulp.task('connect', function () {
  connect.server({
    root: ['dist'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  });
});

//copy html to dist
gulp.task('html', function () {
  gulp
    .src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload())
});

//copy js to dist
gulp.task('js', function () {
  browserify(config.paths.mainJs)
    .transform(reactify)
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.dist + '/scripts'))
    .pipe(connect.reload());
});

//concat css
gulp.task('css', function () {
  gulp
    .src(config.paths.css)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(config.paths.dist + '/css'))
});

//copy images
gulp.task('images', function () {
  gulp
    .src(config.paths.images)
    .pipe(gulp.dest(config.paths.dist + '/images'))
    .pipe(connect.reload());

  //publish favicon
  gulp
    .src('./src/favicon.ico')
    .pipe(gulp.dest(config.paths.dist));
});

//lint our code
gulp.task('lint', function () {
  return gulp
    .src(config.paths.js)
    .pipe(lint())//lint expects your .eslintrc.json file for config
    .pipe(lint.format());
});

//Open the browser to the uri
gulp.task('open', ['connect'], function () {
  gulp
    .src('dist/index.html')
    .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/'}));
});

//Watch for changes
gulp.task('watch', function () {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js , ['js', 'lint']);
  gulp.watch(config.paths.css , ['css']);
});

gulp.task('default', ['html', 'js', 'css', 'images', 'lint', 'open', 'watch']);
