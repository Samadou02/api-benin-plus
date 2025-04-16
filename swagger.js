const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Bénin+',
      version: '1.0.0',
      description: 'Une API pour explorer les villes et sites touristiques du Bénin.',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Serveur local',
      },
    ],
  },
  apis: ['./routes/*.js'], 
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
