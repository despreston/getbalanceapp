const config = require('./set-config');
const routes = require('./lib/routes');
const Hapi   = require('hapi');
const server = new Hapi.Server();

console.log(`
  Starting server.
  NODE_ENV: ${process.env.NODE_ENV}
  port: ${config.port}
`);

server.connection({
  port: config.port,
  host: 'localhost'
});

server.register([require('vision'), require('inert')], err => {
  if (err) {
    console.log(err);
  }

  server.route({
    method: 'GET',
    path: '/dist/{param*}',
    handler: {
      directory: {
        path: 'dist'
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/assets/{param*}',
    handler: {
      directory: {
        path: 'assets'
      }
    }
  });

  server.views({
    engines: {
      html: require('handlebars')
    },
    isCached: false,
    relativeTo: __dirname,
    path: 'lib/templates',
    layout: 'default',
    layoutPath: 'lib/templates/layouts',
    partialsPath: 'lib/templates/partials'
  });

  server.route(routes);
});

server.on('response', request => {
  console.log(
  `${new Date()} ${request.method.toUpperCase()} ${request.url.path} --> ${request.response.statusCode}`);
});

server.start();
