//Criptografia
const crypto = require('crypto')

const generateUniqueId = _ => {
    
    //Criando um ID de 4 bytes aleatorios, trasformando em uma string do tipo hexadecima
    return crypto.randomBytes(4).toString('HEX')
}

module.exports = generateUniqueId