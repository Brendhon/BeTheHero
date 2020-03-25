//Importando a configuração de desenvolvimento
const connection = require('../database/connection')

//Criptografia
const crypto = require('crypto')

module.exports = {

    async index(request, response) {

        //Verificar se o caso esta sendo deletado por quem o criou ou não
        const ong_id = request.headers.authorization

        //Retornando todas as incidents cadastradas
        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*')

        return response.json(incidents)
    },

}