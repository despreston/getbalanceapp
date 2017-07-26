const gulp        = require('gulp');
const fs          = require('fs');

const fnames = fs.readdirSync('./tasks/')
  .map(name => name.replace(/.js$/, ''))
  .forEach(task => require(`./tasks/${task}`)());

gulp.task('default', ['css']);
