exports.up = function(knex, Promise) {
  return knex.schema.table('categories', function(table){
    table.string('name').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('categories')
};
