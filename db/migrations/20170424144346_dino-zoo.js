
exports.up = function(knex, Promise) {
  return knex.schema.createTable('categories', (table) => {
    table.increments()
  })
  .createTable('animals', (table) => {
    table.increments()
  })
  .createTable('keepers', (table) => {
    table.increments()
  })
  .createTable('animal_keeper', (table) => {
    table.increments()
  })
};

exports.down = (knex, Promise) => knex.schema.dropTable('animal_keeper').dropTable('keepers').dropTable('animals').dropTable('categories')
