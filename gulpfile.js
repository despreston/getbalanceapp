const gulp        = require('gulp');
const sass        = require('gulp-sass');
const browserSync = require('browser-sync').create('getbalance.com');
const config      = require('./set-config');
const reload      = browserSync.reload;
const fs          = require('fs');

const fnames = fs.readdirSync('./tasks/')
  .map(name => name.replace(/.js$/, ''))
  .forEach(task => require(`./tasks/${task}`)());

gulp.task('default', ['sass']);

gulp.task('watch', ['sass'], () => {
    browserSync.init({
        proxy: `localhost:${config.port}`,
        browser: 'google chrome'
    });

    gulp.watch("lib/**/*.scss", ['sass']);
    gulp.watch("lib/**/*.html").on('change', reload);
});
