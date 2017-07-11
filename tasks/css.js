let gulp     = require('gulp');
let concat   = require('gulp-concat');
let cleanCSS = require('gulp-clean-css');

module.exports = () => {
  gulp.task('css', () => {
    return gulp.src('lib/styles/**/*.css')
      .pipe(cleanCSS({ rebase: true, inline: ['all'] }, (err, output) => {
        console.log(err || output);
      }))
      .pipe(concat('style.min.css'))
      .pipe(gulp.dest('dist'))
  });
}
