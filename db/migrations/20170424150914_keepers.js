
exports.up = function(knex, Promise) {
  return knex.schema
    .table('keepers', function(table){
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.string('gender').notNullable();
      table.string('age').notNullable();
      table.string('date_of_hire').notNullable();
      table.string('speciality').notNullable();
      table.string('keeper_image').notNullable();
    });
};


exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('keepers')
};
