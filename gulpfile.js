var gulp = require('gulp'),
    //browserSync = require('browser-sync'),
    //reload = browserSync.reload;
    sass = require('gulp-ruby-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    prefix = require('gulp-autoprefixer');


function errorLog(error) {
  console.error.bind(error);
  this.emit('end');
}


//main stylesheet
gulp.task('mainStyles', function(){
  sass('scss/style.scss', {
    sourcemap: true,
  })
  .on('error', errorLog)
  .pipe(prefix('last 2 versions'))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(''));
});




//watch task
gulp.task('watch', function(){
  gulp.watch([
    'scss/*.scss'
  ], ['mainStyles']);

  //browserSync({
  //    proxy: "http://sslocal.dev"
  //});

  //gulp.watch('style.css').on('change', reload);

});


gulp.task('default', ['mainStyles', 'watch']);
