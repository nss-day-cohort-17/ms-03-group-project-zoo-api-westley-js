
exports.up = function(knex, Promise) {
  return knex.schema.table('animal_keeper', function(table){
    table.integer('animal_id').unsigned().notNullable().references('animals.id');
    table.integer('keeper_id').unsigned().notNullable().references('keepers.id');
  });
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('animal_keeper');
};
