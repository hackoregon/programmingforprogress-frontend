var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('./src/static/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/static/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('./src/static/*.scss',['styles']);
});