
exports.up = function(knex, Promise) {
  return knex.schema.table('tricks', function(table){
    table.string('name').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tricks')
};
