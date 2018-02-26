var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function() {
    return gulp.src('questionizer/static/less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('questionizer/static/css'))
});
gulp.task('watch', function() {
    gulp.watch('questionizer/static/**/*.less', ['less']);  // Watch all the .less files, then run the less task
});
