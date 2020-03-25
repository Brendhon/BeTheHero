// Requerindo o Framework Express 
const express = require('express')

// Importaçoes
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

// Chamando o Express 
const routes = express.Router()

//Login
routes.post('/session',SessionController.create)

//Listagem 
routes.get('/ongs',OngController.index)
routes.get('/incidents',IncidentController.index)

//Listagem expecifica
routes.get('/profile',ProfileController.index)

//Cadastro
routes.post('/ongs', OngController.create)
routes.post('/incidents',IncidentController.create)

//Delete
routes.delete('/incidents/:id',IncidentController.delete)

//Exportanto uma variavel dentro de um arquivo
module.exports = routes

