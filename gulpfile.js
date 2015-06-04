'use strict';

var gulp = require('gulp');
var open = require('gulp-open');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var cssmin = require('gulp-minify-css');
var uglify = require('gulp-uglify');


var dist = './';
var html = 'src/*.html';
var css = ['src/css/reset.css', 'src/css/main.css'];
var js = ['src/js/main.js'];

gulp.task('default', ['live', 'watch']);

gulp.task('live', ['reload'], function() {
  connect.server({
    root: dist,
    port: 1337,
    livereload: true
  });
  gulp.src('index.html')
    .pipe(open('', {
      url: 'http://localhost:1337'
    }));
});

gulp.task('run', ['reload'], function() {
  var d = new Date();
  console.log('\n  ' + d.getHours() + ':' + ('0' + d.getMinutes()).slice(-2) + ':' + ('0' + d.getSeconds()).slice(-2) + '\n');
});

gulp.task('reload', ['html', 'css', 'js'], function() {
  return gulp.src(dist + 'index.html')
    .pipe(connect.reload());
});

gulp.task('html', function() {
  return gulp.src(html)
    .pipe(gulp.dest(dist));
});

gulp.task('css', function() {
  return gulp.src(css)
    .pipe(concat('main.css'))
    .pipe(cssmin())
    .pipe(gulp.dest(dist + 'css/'));
});

gulp.task('js', function() {
  return gulp.src(js)
    .pipe(uglify({
      outSourceMap: true
    }))
    .pipe(gulp.dest(dist + 'js/'));
});

gulp.task('watch', function() {
  gulp.watch(html, ['run']);
  gulp.watch(css, ['run']);
  gulp.watch(js, ['run']);
});