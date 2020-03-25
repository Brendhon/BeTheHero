//Importando a configuração de desenvolvimento (conexão com o BD)
const connection = require('../database/connection')

module.exports = {

    async create(request, response) {

        //Todos os dados que foram passados no corpo da requisição por JSON
        const { id } = request.body

        //Conexão com o banco, inserido oq foi passado no body para o banco
        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first()

        //Verificando se a ONG existe
        if (!ong) {
            return response.status(400).json({
                error: 'No ONG found with this ID'
            })
        }

        return response.json( ong )
    }
}