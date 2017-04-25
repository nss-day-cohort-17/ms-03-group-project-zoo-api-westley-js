'use strict';

const { bookshelf } = require('../db/database');

const Keeper = bookshelf.Model.extend({
  tableName: 'keepers'
}, {

  getAll: function () {
    console.log('Get all called from Keeper model')
    return this.forge()
    .fetchAll()
    .then( (rows) => {
      console.log("the rows", rows.toJSON())
      return rows
    })
    .catch( (error) => {
      return error
    });
  }

});


module.exports = bookshelf.model('Keeper', Keeper);
