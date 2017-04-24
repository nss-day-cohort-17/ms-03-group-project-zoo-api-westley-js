
exports.up = function(knex, Promise) {
  knex.schema.table('categories', function(table){
    table.string('name').notNullable();
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTableIfExists('categories')
};
