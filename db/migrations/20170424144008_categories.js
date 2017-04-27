//actually the migration to run all the tables in order

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
  .createTableIfNotExists('categories', (table) => {
    table.increments()
  })
  .createTableIfNotExists('trainers', (table) => {
    table.increments()
  })
  .createTableIfNotExists('tricks', (table) => {
    table.increments()
  })
};

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('animal_keeper').dropTableIfExists('tricks').dropTableIfExists('keepers').dropTableIfExists('trainers').dropTableIfExists('animals').dropTableIfExists('categories')
