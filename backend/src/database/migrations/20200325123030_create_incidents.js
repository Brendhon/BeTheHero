
exports.up = function (knex) {

    //Criando tabela ONGs
    return knex.schema.createTable('incidents', function (table) {
        
        //Cria uma chave primaria de auto-incremento
        table.increments(); 

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable(); 

        //Chave estrangeira
        table.foreign('ong_id').references('id').inTable('ongs')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('incidents')
};
