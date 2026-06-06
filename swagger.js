const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'World Cup API',
    description: 'API for managing World Cup players and stadiums',
  },
  host: 'localhost:4000',
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
