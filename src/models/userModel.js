const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'Por favor ingrese un nombre'],
    trim: true,
    maxlength: [15, 'El nombre no puede exceder los 15 caracteres']
  },
  apellido: {
    type: String,
    required: [true, 'Por favor ingrese un apellido'],
    trim: true,
    maxlength: [15, 'El apellido no puede exceder los 15 caracteres']
  },
  edad: {
    type: Number,
    required: [true, 'Por favor ingrese una edad'],
    trim: true,
    maxlength: [2, 'La edad no puede exceder los 10 caracteres']
  },
  email: {
    type: String,
    required: [true, 'Por favor ingrese un email'],
    trim: true,
    maxlength: [30, 'El email no puede exceder los 30 caracteres']
  }
}, {
  timestamps: true,
  // Para pruebas, permitimos insertar IDs manuales
  _id: true // Esto permite enviar el _id manualmente en pruebas
});

module.exports = mongoose.model('User', UserSchema);