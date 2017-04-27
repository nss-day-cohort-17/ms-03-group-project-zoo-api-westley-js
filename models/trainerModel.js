'use strict'

const {bookshelf} = require('../db/database');
require('./categoryModel');

const Trainer = bookshelf.Model.extend({
  tableName: 'trainers',
}, {
  getAll : function() {
    return this.forge()
    .fetchAll()
    .then((rows) => {
      return rows;
    })
    .catch((err) => {
      return err;
    })
  }
});


module.exports = bookshelf.model('Trainer', Trainer);
