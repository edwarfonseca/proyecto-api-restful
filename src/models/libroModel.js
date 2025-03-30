const mongoose = require('mongoose');

const LibroSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: [true, 'Por favor ingrese un título'],
    trim: true,
    maxlength: [100, 'El título no puede exceder los 100 caracteres']
  },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Autor',
    required: [true, 'Por favor seleccione un autor']
  },
  genero: {
    type: String,
    required: true,
    enum: ['Novela', 'Ciencia Ficción', 'Fantasía', 'Terror', 'Histórica', 'Poesía', 'Ensayo']
  },
  anioPublicacion: {
    type: Number,
    required: true,
    min: [1000, 'El año debe ser mayor a 1000'],
    max: [new Date().getFullYear(), 'El año no puede ser en el futuro']
  },
  isbn: {
    type: String,
    required: true,
    unique: true,
    match: [/^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/, 'Por favor ingrese un ISBN válido']
  },
  disponible: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Libro', LibroSchema);