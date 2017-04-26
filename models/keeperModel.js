'use strict';

const { bookshelf } = require('../db/database');
require('./animalModel');
require('./animal_keeperModel');

const Keeper = bookshelf.Model.extend({
  tableName: 'keepers',
  animal: function() { return this.belongsToMany('Animal').through('Animal_Keeper')}
}, {
  getAll: function () {
    return this.forge()
    .fetchAll()
    .then( (rows) => {
      return rows
    })
    .catch( (error) => {
      return error
    })
  },

  getSingleKeeper: function (id) {
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
