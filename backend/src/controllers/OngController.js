//Importando a configuração de desenvolvimento
const connection = require('../database/connection')

//Criptografia
const crypto = require('crypto')

module.exports = {

    async create(request, response) {

        //Todos os dados que foram passados no corpo da requisição por JSON
        const { name, email, whatsapp, city, uf } = request.body

        //Criando um ID de 4 bytes aleatorios, trasformando em uma string do tipo hexadecimal
        const id = crypto.randomBytes(4).toString('HEX')

        //Conexão com o banco, inserido oq foi passado no body para o banco
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id })
    },

    async index(request, response) {

        //Retornando todas as ongs cadastradas
        const ongs = await connection('ongs').select('*')

        return response.json(ongs)
    }
}