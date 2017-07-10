const gulp = require('gulp');
const child = require('child_process');

module.exports = () => {
  let server;

  gulp.task('server', () => {
    try {
      // Server already running, kill it before restarting
      if (server) {
        server.kill();
      }

      server = child.spawn('node', ['index']);

      server.stdout.setEncoding('utf-8');
      server.stderr.setEncoding('utf-8');

      server.stdout.on('data', data => console.log(data));
      server.stderr.on('data', data => console.log(data));

    } catch (e) {
      console.log('Error starting server ', e);
    }
  });
}
