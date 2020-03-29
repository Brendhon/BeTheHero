const request = require('supertest')
const app = require('../../src/app') //Utilizando uma porta so para os testes
const connection = require('../../src/database/connection')

describe('ONG', () => {
    beforeEach( async () => {
        //Desfaz todas as migrations - para avitar o crescimento do BD
        await connection.migrate.rollback();
        //Cria as migrations 
        await connection.migrate.latest();
    })

    afterAll( async () => {
        //Desfaz a conexão como o banco 
        await connection.destroy();
    })

    it('CREATE', async () => {
        
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "asd",
                email: "asdsd@gmail.com",
                whatsapp: "1234567891",
                city: "Borda da Mata",
                uf: "AA"
            })
            expect(response.body).toHaveProperty('id')  
            expect(response.body.id).toHaveLength(8)  
    })
})