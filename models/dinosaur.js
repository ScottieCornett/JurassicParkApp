const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DinosaurSchema = new Schema({
  name: String,
  species: String,
  scientificName: String,
  length: String,
  height: String,
  weight: String,
  historicalPeriod: String,
  description: String,
  funFact: String,
  population: Number,
  image: {
    url: String,
    fileName: String,
  },
});

module.exports = mongoose.model('Dinosaur', DinosaurSchema);
