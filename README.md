# API RESTful - Taller UPTC

API desarrollada para el taller de la Universidad Pedagógica y Tecnológica de Colombia.

## Integrantes del grupo
- Edwar Esteban Fonseca Jimenez


## Requisitos
- Node.js 14+
- MongoDB
- NPM o Yarn

## Instalación
1. Clonar el repositorio `(https://github.com/edwarfonseca/proyecto-api-restful.git)`
2. Instalar dependencias: `npm install`
3. Configurar variables de entorno en `.env`
4. Iniciar servidor: `node src/server.js`

## Endpoints

La API cuenta con los siguientes endpoints:

- `GET /api/libros` - Obtener todos los libros
- `POST /api/libros` - Crear un nuevo libro (requiere autenticación)
- `GET /api/libros/:id` - Obtener un libro por ID
- `PUT /api/libros/:id` - Actualizar un libro (requiere autenticación)
- `DELETE /api/libros/:id` - Eliminar un libro (requiere autenticación)

- - `GET /api/autores` - Obtener todos los autores
- `POST /api/autores` - Crear un nuevo autor (requiere autenticación)
- `GET /api/autores/:id` - Obtener un autores por ID
- `PUT /api/autores/:id` - Actualizar un autore (requiere autenticación)
- `DELETE /api/autores/:id` - Eliminar un autore (requiere autenticación)

## Documentación con Swagger

Accede a la documentación interactiva en: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Despliegue en la nube

La API está desplegada en RENDER: https://proyecto-api-restful.onrender.com

## Consideraciones
- Todos los endpoints de creación, actualización y eliminación requieren autenticación mediante JWT
- Se debe incluir el token en el header `Authorization` con el formato `Bearer <token>`
