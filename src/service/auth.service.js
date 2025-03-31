const { generarToken, verificarToken } = require("../config/jwt")


generateToken = (id) => {
    return generarToken(id);
}

verificar = (token) => {
    return verificarToken(token);
}



module.exports = {
    generateToken,
    verificar
}