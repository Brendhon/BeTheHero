// Requerindo o Framework Express 
const express = require('express')
const { celebrate, Segments, Joi } = require('celebrate')

// Importaçoes
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

// Chamando o Express 
const routes = express.Router()

//Login
routes.post('/session', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required()
    })
}),SessionController.create)

//Listagem 
routes.get('/ongs', OngController.index)


routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number().required()
    })
}), IncidentController.index)

//Listagem expecifica
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown() //Como varios parametros são enviados pelo header o "unknown()" serve para descartar os que não foram validados
}), ProfileController.index)

//Cadastro
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(), // Valida que o nome tem que ser uma String e que é requerido (Obrigatorio)
        email: Joi.string().required().email(), // Valida que tem que ser uma String, obrigatorio e se tem formato de email
        whatsapp: Joi.string().trim().regex(/^[0-9]{8,11}$/).required(),
        city: Joi.string().required(),
        uf: Joi.string().trim().regex(/^[A-Z]{2,2}$/).required(),
    })
}), OngController.create)

routes.post('/incidents', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(), // Valida que o nome tem que ser uma String e que é requerido (Obrigatorio)
        description: Joi.string().required(), // Valida que tem que ser uma String, obrigatorio e se tem formato de email
        value: Joi.number().required()
    })
}), IncidentController.create)

//Delete
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), IncidentController.delete)

//Exportanto uma variavel dentro de um arquivo
module.exports = routes

