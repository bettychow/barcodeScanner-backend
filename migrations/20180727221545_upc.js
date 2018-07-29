
exports.up = function(knex, Promise) {

  return knex.schema.createTable('upc', table => {
    table.increments('id')
    table.string('product_name').notNullable().defaultsTo('')
    table.string('upc').notNullable().defaultsTo('')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('upc')
};
