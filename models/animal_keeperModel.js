const { bookshelf } = require('../db/database');
require('./animalModel');
require('./keeperModel');

const Animal_Keeper = bookshelf.Model.extend({
  tableName: 'animal_keeper',
  animal: function() { this.belongsTo('Animal')},
  keeper: function() { this.belongsTo('Keeper')}
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
  getOne: function(id) {
    return this.forge({id})
    .fetch()
    .then( (ak) => {
      return ak
    })
    .catch( (err) => {
      return err
    })
  }
});

module.exports = bookshelf.model('Animal_Keeper', Animal_Keeper);
