const gulp        = require('gulp');
const browserSync = require('browser-sync').create('getbalance.com');
const config      = require('./set-config');
const reload      = browserSync.reload;
const fs          = require('fs');

const fnames = fs.readdirSync('./tasks/')
  .map(name => name.replace(/.js$/, ''))
  .forEach(task => require(`./tasks/${task}`)());

gulp.task('default', ['server', 'css']);

gulp.task('watch', ['default'], () => {
    browserSync.init({
        proxy: `localhost:${config.port}`,
        browser: 'google chrome'
    });

    gulp.watch(['lib/**/*.js', '*.js'], ['server']);
    gulp.watch('lib/**/*').on('change', reload);
});

