const Libro = require('../models/libroModel');
const Autor = require('../models/autorModel');

/**
 * @swagger
 * tags:
 *   name: Libros
 *   description: Operaciones relacionadas con libros
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Libro:
 *       type: object
 *       required:
 *         - titulo
 *         - autor
 *         - genero
 *         - anioPublicacion
 *         - isbn
 *       properties:
 *         titulo:
 *           type: string
 *           description: Título del libro
 *         autor:
 *           type: string
 *           description: ID del autor del libro
 *         genero:
 *           type: string
 *           enum: [Novela, Ciencia Ficción, Fantasía, Terror, Histórica, Poesía, Ensayo]
 *           description: Género literario
 *         anioPublicacion:
 *           type: integer
 *           description: Año de publicación
 *         isbn:
 *           type: string
 *           description: ISBN del libro
 *         disponible:
 *           type: boolean
 *           description: Indica si el libro está disponible
 *       example:
 *         titulo: Cien años de soledad
 *         autor: 60d21b4667d0d89942e8833b
 *         genero: Novela
 *         anioPublicacion: 1967
 *         isbn: 978-0307474728
 *         disponible: true
 */

// Obtener todos los libros
exports.obtenerLibros = async (req, res) => {
  try {
    const libros = await Libro.find().populate('autor', 'nombre nacionalidad');
    res.status(200).json(libros);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear un nuevo libro
exports.crearLibro = async (req, res) => {
  try {
    const nuevoLibro = new Libro(req.body);
    const libroGuardado = await nuevoLibro.save();
    
    // Actualizar el autor para incluir este libro
    await Autor.findByIdAndUpdate(
      req.body.autor,
      { $push: { libros: libroGuardado._id } },
      { new: true }
    );
    
    res.status(201).json(libroGuardado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener un libro por ID
exports.obtenerLibro = async (req, res) => {
  try {
    const libro = await Libro.findById(req.params.id).populate('autor');
    if (!libro) {
      return res.status(404).json({ error: 'Libro no encontrado' });
    }
    res.status(200).json(libro);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un libro
exports.actualizarLibro = async (req, res) => {
  try {
    const libro = await Libro.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!libro) {
      return res.status(404).json({ error: 'Libro no encontrado' });
    }
    res.status(200).json(libro);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar un libro
exports.eliminarLibro = async (req, res) => {
  try {
    const libro = await Libro.findByIdAndDelete(req.params.id);
    if (!libro) {
      return res.status(404).json({ error: 'Libro no encontrado' });
    }
    
    // Eliminar la referencia del libro en el autor
    await Autor.findByIdAndUpdate(
      libro.autor,
      { $pull: { libros: libro._id } },
      { new: true }
    );
    
    res.status(200).json({ message: 'Libro eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};