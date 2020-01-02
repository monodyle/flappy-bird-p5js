var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default',function () {
  browserSync.init({
    port: 8000,
    server: {
      baseDir: './'
    }
  });

  gulp.watch('*.html').on('change', browserSync.reload);
  gulp.watch('*.js').on('change', browserSync.reload);
});