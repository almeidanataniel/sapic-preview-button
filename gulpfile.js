var gulp = require('gulp');
var uglify = require('gulp-uglify');
var header = require('gulp-header');
var concat = require('gulp-concat');
var userscript = require('fs').readFileSync('./src/sapic-preview-button.meta.js', 'utf8') + '\n';

gulp.task('default', function() {
    return gulp.src(['./src/*'])
        .pipe(concat('sapic-preview-button.user.js'))
        .pipe(uglify())
        .pipe(header(userscript))
        .pipe(gulp.dest('./'));
});