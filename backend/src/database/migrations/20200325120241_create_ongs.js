
//Método UP responsavel pela criação de tabelas
exports.up = function(knex) {

    //Criando tabela ONGs
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary(); //Chave primaria
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable(); // '2' limita o numero de caracteres
      })
};

//Caso de BO oq preciso fazer para voltar atras kkkkk
exports.down = function(knex) {
  return knex.schema.dropTable('ongs')
};
