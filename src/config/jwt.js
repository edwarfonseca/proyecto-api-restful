const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const generarToken = (usuarioId) => {
  return jwt.sign({ id: usuarioId }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });
};

const verificarToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = { generarToken, verificarToken };