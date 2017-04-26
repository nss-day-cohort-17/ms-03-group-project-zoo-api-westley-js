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
  getKeeper: function(id) {
    return this.where({animal_id: id})
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
