//Importando o Knex
const knex = require('knex')

//importando as configurações do arquivo knex e atribuindo a uma variavel
const configuration = require('../../knexfile')

const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development

//Passando a conexão por desenvolvimento
const connection = knex(config)


module.exports = connection