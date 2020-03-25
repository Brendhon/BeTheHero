//Importando o Knex
const knex = require('knex')

//importando as configurações do arquivo knex e atribuindo a uma variavel
const configuration = require('../../knexfile')

//Passando a conexão por desenvolvimento
const connection = knex(configuration.development)


module.exports = connection