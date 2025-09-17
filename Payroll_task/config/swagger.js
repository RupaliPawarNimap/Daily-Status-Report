const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path");

const options = {
  swaggerDefinition: {
    swagger: "2.0",
    info: {
      title: "Appointment System",
      version: "1.0.0",
      description: "API documentation for my project",
    },
    host: "localhost:3000", // change if needed
    basePath: "/api",       // your base route
    schemes: ["http"],      // or ["https"] if deployed on HTTPS
    securityDefinitions: {
      bearerAuth: {
        type: "apiKey",
        name: "Authorization",
        in: "header",
        scheme: "jwt",
      },
    },
  },
  // **Point to your separate swagger folder**
  apis: [path.join(__dirname, "../swagger/*.js")], // <- correct path
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = { swaggerUi, swaggerSpec };
