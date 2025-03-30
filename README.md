# API RESTful - Taller UPTC

API desarrollada para el taller de la Universidad Pedagógica y Tecnológica de Colombia.

## Integrantes del grupo
- [Nombre 1]
- [Nombre 2]
- [Nombre 3]

## Requisitos
- Node.js 14+
- MongoDB
- NPM o Yarn

## Instalación
1. Clonar el repositorio
2. Instalar dependencias: `npm install`
3. Configurar variables de entorno en `.env`
4. Iniciar servidor: `npm run dev`

## Endpoints

La API cuenta con los siguientes endpoints:

- `GET /api/libros` - Obtener todos los libros
- `POST /api/libros` - Crear un nuevo libro (requiere autenticación)
- `GET /api/libros/:id` - Obtener un libro por ID
- `PUT /api/libros/:id` - Actualizar un libro (requiere autenticación)
- `DELETE /api/libros/:id` - Eliminar un libro (requiere autenticación)

## Documentación con Swagger

Accede a la documentación interactiva en: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Despliegue en la nube

La API está desplegada en: [URL del despliegue]

## Consideraciones
- Todos los endpoints de creación, actualización y eliminación requieren autenticación mediante JWT
- Se debe incluir el token en el header `Authorization` con el formato `Bearer <token>`