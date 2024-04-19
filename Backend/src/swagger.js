import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'Cats API',
    description: '',
  },
  host: 'localhost:3002',
};

const outputFile = './swagger-output.json';
const routes = [''];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen()(outputFile, routes, doc);
