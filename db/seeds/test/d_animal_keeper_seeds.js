exports.seed = function(knex, Promise) {
  return knex('animal_keeper').del() // Deletes ALL existing entries
    .then(function () { // Inserts seed entries one by one in series
      return Promise.all([
        knex('animal_keeper').insert({
          animal_id: 1,
          keeper_id: 6
        }),
        knex('animal_keeper').insert({
          animal_id: 2,
          keeper_id: 5
        }),
        knex('animals').insert({
          animal_id: 3,
          keeper_id: 4
        }),
        knex('animals').insert({
          animal_id: 4,
          keeper_id: 3
        }),
        knex('animals').insert({
          animal_id: 5,
          keeper_id: 2
        }),
        knex('animals').insert({
          animal_id: 6,
          keeper_id: 1
        }),
        knex('animals').insert({
          animal_id: 7,
          keeper_id: 1
        }),
        knex('animals').insert({
          animal_id: 8,
          keeper_id: 2
        })
      ]);
    });
};
