const mongoose = require('mongoose');

const AutorSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'Por favor ingrese un nombre'],
    trim: true,
    maxlength: [50, 'El nombre no puede exceder los 50 caracteres']
  },
  nacionalidad: {
    type: String,
    required: true,
    enum: ['Colombiano', 'Argentino', 'Mexicano', 'Español', 'Otro']
  },
  fechaNacimiento: {
    type: Date,
    required: true
  },
  biografia: {
    type: String,
    maxlength: [500, 'La biografía no puede exceder los 500 caracteres']
  }
}, {
  timestamps: true,
  // Para pruebas, permitimos insertar IDs manuales
  _id: true // Esto permite enviar el _id manualmente en pruebas
});

module.exports = mongoose.model('Autor', AutorSchema);