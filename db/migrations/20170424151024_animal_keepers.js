
exports.up = function(knex, Promise) {
  knex.schema.table('animal_keeper', function(table){
    table.integar('animal_id').unsigned().notNullable().references('animals.id');
    table.integar('keeper_id').unsigned().notNullable().references('keeper.id');
};

exports.down = function(knex, Promise) {
  knex.schema.dropTableIfExists('animal_keeper');
};
