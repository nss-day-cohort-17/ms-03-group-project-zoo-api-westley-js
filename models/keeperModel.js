'use strict';

const { bookshelf } = require('../db/database');
require('./animalModel');
require('./animal_keeperModel');

const Keeper = bookshelf.Model.extend({
  tableName: 'keepers',
  animal: function() { return this.belongsToMany('Animal').through('Animal_Keeper')}
}, {
  getAll: function () {
    // console.log('Get all called from Keeper model')
    return this.forge()
    .fetchAll()
    .then( (rows) => {
      // console.log("the rows", rows.toJSON())
      return rows
    })
    .catch( (error) => {
      return error
    })
  },

  getSingleKeeper: function (id) {
    console.log('Get single keeper called from Keeper modle')
    return this.forge({id})
    .fetch()
    .then( (keeper) => {
      return keeper;
    })
    .catch( (error) => {
      return error;
    })
  },

  dependents: ['animal']

});

module.exports = bookshelf.model('Keeper', Keeper);
