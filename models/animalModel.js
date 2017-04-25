'use strict';

const { bookshelf } = require('../db/database');

const Animal = bookshelf.Model.extend({
  tableName: 'animals'
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
  }
})

module.exports = bookshelf.model('Animal', Animal)
