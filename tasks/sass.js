const gulp        = require('gulp');
const sass        = require('gulp-sass');
const rename      = require('gulp-rename');
const browserSync = require('browser-sync').get('getbalance.com');

module.exports = () => {
  const input = 'lib/scss/index.scss';
  const output = 'dist/';

  gulp.task('sass', () => {
    return gulp.src(input)
      .pipe(sass({ outputStyle: 'compressed' }))
      .pipe(rename('styles.min.css'))
      .pipe(gulp.dest(output))
      .pipe(browserSync.stream());
  });
}
