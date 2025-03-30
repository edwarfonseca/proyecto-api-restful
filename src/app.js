const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const path = require('path');
require('dotenv').config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
console.log(process.env.MONGODB_URI)
// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error de conexión a MongoDB:', err));

// Configuración de Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API RESTful - Taller UPTC',
      version: '1.0.0',
      description: 'Documentación de la API para el taller de la Universidad Pedagógica y Tecnológica de Colombia'
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 3000}`
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    }
  },
  apis: ['./src/routes/*.js']
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Rutas
app.use('/api/autores', require('./routes/autorRoutes'));
app.use('/api/libros', require('./routes/libroRoutes'));
// Agrega más rutas según necesites

// Manejador de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo salió mal!' });
});

module.exports = app;