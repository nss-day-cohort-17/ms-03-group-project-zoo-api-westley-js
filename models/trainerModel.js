'use strict'

const {bookshelf} = require('../db/database');
require('./categoryModel');

const Trainer = bookshelf.Model.extend({
  tableName: 'trainers',
}, {
  getAll: function() {
    return this.forge()
    .fetchAll()
    .then((rows) => {
      return rows;
    })
    .catch((error) => {
      return error;
    })
  },

  getSingleTrainer: function (id) {
    return this.forge({id})
    .fetch()
    .then((row) => {
      return row;
    })
    .catch((error) => {
       return error
    })
  }

});


module.exports = bookshelf.model('Trainer', Trainer);
