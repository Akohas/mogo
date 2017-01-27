	var gulp = require('gulp'),
      sass = require('gulp-sass'),
      jade = require('gulp-jade'),
      connect = require('gulp-connect'),
      watch = require('gulp-watch'),
      watchify = require('watchify'),
      fs = require('fs'),
      source = require('vinyl-source-stream'),
      browserify = require('browserify'),
      svgSprite = require('gulp-svg-sprite'),
      svgmin = require('gulp-svgmin'),
      spriteConfig = {
        mode: {
            symbol: true
        }
      };

gulp.task('jade', function(){
  gulp.src('./views/jade/**/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('./views/html'))
  .pipe(connect.reload());
});

gulp.task('sass', function(){
    gulp.src('./static/style.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./static/dist'))
    .pipe(connect.reload());
  });

 gulp.task('watch', function(){
    gulp.watch(['static/**/*.scss'], ['sass']);
    gulp.watch(['views/jade/**/*.jade'], ['jade']);
  });

gulp.task('connect', function(){
    connect.server({
      root: './',
      livereload: true,
      port: 8000
    });
  });

gulp.task('watchify', function() {
  var sourcefile = './js/main.js';

  var bundle = browserify({
    entries: ['./js/main.js'],
    cache: {},
    debug: true,
    packageCache: {},
    plugin: [watchify]
  });

  bundle.on('update', bundleFunc);
  bundleFunc();

  bundle.on('log', function (msg) {
    var log = [];
    if(msg){
      console.log('js was written from');
    }
  });

  function bundleFunc() {
    bundle
    .bundle()
    .pipe(source('common.js'))
    .pipe(gulp.dest('./js/dist'));
  }


});
 


 gulp.task('svg-sprites', function(){
  gulp.src('./icons/*.svg')
    .pipe(svgmin())
    .pipe(svgSprite(spriteConfig))
    .pipe(gulp.dest('./sprites'));
 });

gulp.task('default',['jade', 'connect','watchify', 'watch', 'sass', 'svg-sprites']);
