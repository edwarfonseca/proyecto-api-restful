const express = require('express');
const router = express.Router();
const autorController = require('../controllers/autorController');
const autenticar = require('../middlewares/authMiddleware');

/**
 * @swagger
 * /api/autores:
 *   get:
 *     summary: Obtener todos los autores
 *     tags: [Autores]
 *     responses:
 *       200:
 *         description: Lista de autores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Autor'
 */
router.get('/', autorController.obtenerAutores);

/**
 * @swagger
 * /api/autores:
 *   post:
 *     summary: Crear un nuevo autor
 *     tags: [Autores]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Autor'
 *     responses:
 *       201:
 *         description: Autor creado exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.post('/', autorController.crearAutor);

/**
 * @swagger
 * /api/autores/{id}:
 *   get:
 *     summary: Obtener un autor por ID
 *     tags: [Autores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del autor
 *     responses:
 *       200:
 *         description: Datos del autor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Autor'
 *       404:
 *         description: Autor no encontrado
 */
router.get('/:id', autorController.obtenerAutor);

/**
 * @swagger
 * /api/autores/{id}:
 *   put:
 *     summary: Actualizar un autor
 *     tags: [Autores]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del autor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Autor'
 *     responses:
 *       200:
 *         description: Autor actualizado
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Autor no encontrado
 */
router.put('/:id', autorController.actualizarAutor);

/**
 * @swagger
 * /api/autores/{id}:
 *   delete:
 *     summary: Eliminar un autor
 *     tags: [Autores]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del autor
 *     responses:
 *       200:
 *         description: Autor eliminado
 *       404:
 *         description: Autor no encontrado
 */
router.delete('/:id', autorController.eliminarAutor);

module.exports = router;