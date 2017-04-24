exports.up = function(knex, Promise) {
 knex.schema.table('animals', function(table){
   table.string('name').notNullable();
   table.string('species').notNullable();
   table.string('age').notNullable();
   table.string('gender').notNullable();
   table.integer('category_id').notNullable().unsigned().references('directors.id');
   table.integer('number_of_kills').notNullable();
   table.string('animal_image').notNullable();
   })
 };

exports.down = function(knex, Promise) {
  knex.schema.dropTableIfExists('animals');
};
