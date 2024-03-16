const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DinosaurSchema = new Schema({
  name: String,
  species: String,
  description: String,
  population: Number,
  admin: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  image: {
    url: String,
    fileName: String,
  },
});

module.exports = mongoose.model('Dinosaur', DinosaurSchema);
