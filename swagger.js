const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Super Hero API',
    description: 'API for superheroes and villains',
  },
  host: 'localhost:4000',
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
