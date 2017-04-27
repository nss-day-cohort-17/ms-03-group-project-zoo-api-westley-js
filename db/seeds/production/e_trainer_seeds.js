'use strict';

const trainers = require('../../../data/trainers');

// console.log('keepers', keepers);

exports.seed = function(knex, Promise) {

  const trainerPromises = trainers.map( ({first_name, last_name, gender, age, date_of_hire, category_id, trainer_image}) => {
    return knex('trainers').insert({first_name, last_name, gender, age, date_of_hire, category_id, trainer_image})
  })

  return knex('trainers').del() // Deletes ALL existing entries
    .then(function () { // Inserts seed entries one by one in series
      return Promise.all(trainerPromises);
    })
};
