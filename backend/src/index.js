// Requerindo o Framework Express 
const express = require('express')

//Importação do modulo que ira determinar quem poderá acessar a aplicação
const cors = require('cors')

//Importação de arquivos
const routes = require('./routes')

// Chamando o Express 
const app = express()

// Avisando que será usado o formato JSON
// Trasformando o JSON em um objeto para ser utilizado
app.use(express.json())

//Usando o cors
app.use(cors())

//Usando o routes
app.use(routes)

app.listen(3333)
/**
 * Rota / Recurso
*/

/**
 * Métodos HTTP
 * 
 * GET: Buscar/Listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação
*/

/**
 * Tipos de Parâmetros:
 * 
 * Query Params: Enviados após "?" (Filtros, paginação) 'query'
 * Route Params: Utilizado para identificar recursos 'params'
 * Request Body: Corpo da requisição 'body'
 * 
*/