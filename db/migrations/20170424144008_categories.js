exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('categories', (table) => {
    table.increments()
  })
  .createTableIfNotExists('animals', (table) => {
    table.increments()
  })
  .createTableIfNotExists('keepers', (table) => {
    table.increments()
  })
  .createTableIfNotExists('animal_keeper', (table) => {
    table.increments()
  })
};

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('animal_keeper').dropTableIfExists('keepers').dropTableIfExists('animals').dropTableIfExists('categories')
