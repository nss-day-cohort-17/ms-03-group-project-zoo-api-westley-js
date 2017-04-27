exports.seed = function(knex, Promise) {
  return knex('tricks').del() // Deletes ALL existing entries
    .then(function () { // Inserts seed entries one by one in series
      return Promise.all([
        knex('tricks').insert({
          name: 'Eat a Lawyer'
          }),
        knex('tricks').insert({
          name: 'Find Item by Scent'
        }),
        knex('tricks').insert({
          name: 'Spray Acid'
        }),
        knex('tricks').insert({
          name: 'Sit'
        }),
        knex('tricks').insert({
          name: 'Jump'
        }),
        knex('tricks').insert({
          name: 'Kill'
        }),
        knex('tricks').insert({
          name: 'Take Over the Park'
        }),
        knex('tricks').insert({
          name: 'Change Genders'
        })
      ]);
    });
};
