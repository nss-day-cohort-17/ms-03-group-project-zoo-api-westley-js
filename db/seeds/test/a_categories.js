exports.seed = function(knex, Promise) {
  return knex('categories').del() // Deletes ALL existing entries
    .then(function () { // Inserts seed entries one by one in series
      return Promise.all([
        knex('categories').insert({
          name: 'Big Dino'
          }),
        knex('categories').insert({
          name: 'Small Dino'
        }),
        knex('categories').insert({
          name: 'Cute Dino'
        }),
        knex('categories').insert({
          name: 'Will Eat You Dino'
        }),
        knex('categories').insert({
          name: 'Will Eat You As A Snack Dino'
        }),
        knex('categories').insert({
          name: 'Will Get Rich Dino'
        })
      ]);
    });
};
