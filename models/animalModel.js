'use strict';

const { bookshelf } = require('../db/database');
require('./keeperModel');
require('./animal_keeperModel');

const Animal = bookshelf.Model.extend({
  tableName: 'animals',
  keeper: function() { return this.belongsToMany('Keeper').through('Animal_Keeper')}
}, {
  getAll: function() {
    return this.forge()
    .fetchAll()
    .then( (rows) => {
      return rows
    })
    .catch( (err) => {
      return err
    })
  },
  getOneAnimal: function(id) {
    return this.forge({id})
    .fetch()
    .then( (animal) => {
      return animal
    })
    .catch( (err) => {
      return err
    })
  }
})

module.exports = bookshelf.model('Animal', Animal)
