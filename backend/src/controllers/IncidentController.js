//Importando a configuração de desenvolvimento
const connection = require('../database/connection')

module.exports = {

    async create(request, response) {

        //Todos os dados que foram passados no corpo da requisição por JSON
        const { title, description, value } = request.body

        //Atribundo o caso (incidents) a ong responsavel
        const ong_id = request.headers.authorization

        //Conexão com o banco, inserido oq foi passado no body para o banco
        const result = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        })

        //Pegando o ID
        const id = result[0]

        return response.json({ id })
    },

    async index(request, response) {

        //Esperando a pagina senão assume o padrão 1
        const { page = 1 } = request.query

        const [count] = await connection('incidents').count()

        //Retornando todas as incidents cadastradas - Esquema de paginação
        const incidents = await connection('incidents')
            .join('ongs', 'ong_id', '=', 'incidents.ong_id')
            .limit(5) //Limitando o numero de casos que sera chamado
            .offset((page - 1) * 5) //Pulando de 5 em 5 
            .select(['incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'])

        //Atribuindo ao cabeçalho o total de casos
        response.header('X-Total-Count', count['count(*)'])

        return response.json(incidents)
    },

    async delete(request, response) {

        //Pegando o id do caso a ser deletado
        const { id } = request.params

        //Verificar se o caso esta sendo deletado por quem o criou ou não
        const ong_id = request.headers.authorization

        //Retorna o id da ong
        const incidents = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first()

        // Verificação se o caso pertence a ong correta
        if (ong_id !== incidents.ong_id) {
            return response.status(401).json({ error: 'Operation not permitted' })
        }

        //Deletando o caso 
        await connection('incidents').where('id', id).delete()

        return response.status(204).send()
    }
}