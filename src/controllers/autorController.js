const Autor = require('../models/autorModel');

/**
 * @swagger
 * tags:
 *   name: Autores
 *   description: Operaciones relacionadas con autores
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Autor:
 *       type: object
 *       required:
 *         - nombre
 *         - nacionalidad
 *         - fechaNacimiento
 *       properties:
 *         nombre:
 *           type: string
 *           description: Nombre completo del autor
 *         nacionalidad:
 *           type: string
 *           enum: [Colombiano, Argentino, Mexicano, Español, Otro]
 *           description: Nacionalidad del autor
 *         fechaNacimiento:
 *           type: string
 *           format: date
 *           description: Fecha de nacimiento del autor (YYYY-MM-DD)
 *         biografia:
 *           type: string
 *           description: Biografía del autor
 *       example:
 *         nombre: Gabriel García Márquez
 *         nacionalidad: Colombiano
 *         fechaNacimiento: 1927-03-06
 *         biografia: Premio Nobel de Literatura en 1982
 */

// Obtener todos los autores
exports.obtenerAutores = async (req, res) => {
  try {
    const autores = await Autor.find();
    res.status(200).json(autores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear un nuevo autor
exports.crearAutor = async (req, res) => {
  try {
    const nuevoAutor = new Autor(req.body);
    const autorGuardado = await nuevoAutor.save();
    res.status(201).json(autorGuardado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener un autor por ID
exports.obtenerAutor = async (req, res) => {
  try {
    const autor = await Autor.findById(req.params.id);
    if (!autor) {
      return res.status(404).json({ error: 'Autor no encontrado' });
    }
    res.status(200).json(autor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un autor
exports.actualizarAutor = async (req, res) => {
  try {
    const autor = await Autor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!autor) {
      return res.status(404).json({ error: 'Autor no encontrado' });
    }
    res.status(200).json(autor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar un autor
exports.eliminarAutor = async (req, res) => {
  try {
    const autor = await Autor.findByIdAndDelete(req.params.id);
    if (!autor) {
      return res.status(404).json({ error: 'Autor no encontrado' });
    }
    res.status(200).json({ message: 'Autor eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};