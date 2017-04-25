const { bookshelf } = require('../db/database');
require('./animalModel');
require('./keeperModel');

const Animal_Keeper = bookshelf.Model.extend({
  tableName: 'animal_keeper',
  animal: function() { this.belongsTo('Animal')},
  keeper: function() { this.belongsTo('Keeper')}
});

module.exports = bookshelf.model('Animal_Keeper', Animal_Keeper);
