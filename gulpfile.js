(function() {
  'use strict';
  var gulp = require('gulp'),
    requireDir = require('require-dir');


  requireDir('./gulp/tasks');

  gulp.task('default', ['scripts', 'less', 'revreplace', 'nodemon', 'watch']);
}());
