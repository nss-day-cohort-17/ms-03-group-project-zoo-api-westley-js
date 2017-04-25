'use strict';

const keepers = require('../../../data/keepers');

// console.log('keepers', keepers);

exports.seed = function(knex, Promise) {

  const keeperPromises = keepers.map( ({first_name, last_name, gender, age, date_of_hire, speciality, keeper_image}) => {
    return knex('keepers').insert({first_name, last_name, gender, age, date_of_hire, speciality, keeper_image})
  })

  return knex('keepers').del() // Deletes ALL existing entries
    .then(function () { // Inserts seed entries one by one in series
      return Promise.all(keeperPromises);
};
