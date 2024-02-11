const mongoose = require('mongoose');
const Dinosaur = require('../models/dinosaur');

mongoose.connect('mongodb://127.0.0.1:27017/jurassicpark');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected!');
});

const seedDb = async () => {
  const trex = new Dinosaur({
    name: 'Sally',
    species: 'Tyrannosaurus Rex',
    description:
      'Our star attraction! Sally is a beast to behold. Only for the brave!!!',
    population: 1,
  });

  await trex.save();
};

seedDb().then(() => {
  mongoose.connection.close();
});
