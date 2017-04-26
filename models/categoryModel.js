'use strict';

const { bookshelf } = require('../db/database');
require('./animalModel');
require('./animal_keeperModel');

const Category = bookshelf.Model.extend({
  tableName: 'categories',
  animal: function() { return this.belongsToMany('Animal').through('Animal')}
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

  getSingleCategory: function (id) {
    return this.forge({id})
    .fetch()
    .then( (category) => {
      return category;
    })
    .catch( (error) => {
      return error;
    })
  },

  dependents: ['animal']

});

module.exports = bookshelf.model('Category', Category);
