let gulp          = require('gulp');
let concat        = require('gulp-concat');
let cleanCSS      = require('gulp-clean-css');
const browserSync = require('browser-sync').get('getbalance.com');

module.exports = () => {
  gulp.task('css', () => {
    return gulp.src('lib/styles/**/*.css')
      .pipe(cleanCSS({ inline: ['none'] }, () => null))
      .pipe(concat('style.min.css'))
      .pipe(gulp.dest('dist'))
      .pipe(browserSync.stream());
  });
}
