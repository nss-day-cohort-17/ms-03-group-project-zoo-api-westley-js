
exports.up = function(knex, Promise) {
  knex.schema.alterTable('categories', function(table){
    table.string('name').notNullable().alter();
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTableIfExists('categories')
};
