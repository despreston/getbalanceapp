let gulp          = require('gulp');
let concat        = require('gulp-concat');
let cleanCSS      = require('gulp-clean-css');

module.exports = () => {
  gulp.task('css', () => {
    return gulp.src('styles/**/*.css')
      .pipe(cleanCSS({ inline: ['none'] }, () => null))
      .pipe(concat('style.min.css'))
      .pipe(gulp.dest('dist'));
  });
}
