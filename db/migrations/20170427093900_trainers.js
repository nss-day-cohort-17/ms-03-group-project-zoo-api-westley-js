
exports.up = function(knex, Promise) {
  return knex.schema
    .table('trainers', function(table){
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.string('gender').notNullable();
      table.string('age').notNullable();
      table.string('date_of_hire').notNullable();
      table.integer('category_id').notNullable().unsigned().references('categories.id')
      table.string('trainer_image').notNullable();
    });
};


exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('trainers')
};
