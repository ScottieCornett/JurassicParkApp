const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DinosaurSchema = new Schema({
  name: String,
  species: String,
  description: String,
  population: Number,
});

module.exports = mongoose.model('Dinosaur', DinosaurSchema);
