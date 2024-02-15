const mongoose = require('mongoose');
const Dinosaur = require('../models/dinosaur');

mongoose.connect('mongodb://127.0.0.1:27017/jurassicpark');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected!');
});

// const seedDb = async () => {
//   const trex = new Dinosaur({
//     name: 'Sally',
//     species: 'Tyrannosaurus Rex',
//     description:
//       'Our star attraction! Sally is a beast to behold. Only for the brave!!!',
//     population: 1,
//   });

//   await trex.save();
// };

const seedDinos = async () => {
  await Dinosaur.insertMany([
    {
      name: 'Sally',
      species: 'Tyrannosaurus Rex',
      description:
        'The star of the show! Sally is a fearsome beast to behold. Gaze at your own risk!!',
      population: 1,
    },
    {
      name: 'Teresa',
      species: 'Triceratops',
      description:
        'Teresa is our adult Triceratops. Her brow horns are over 3 feet long!',
      population: 2,
    },
    {
      name: 'Trissa',
      species: 'Triceratops',
      description:
        'Our newest addition to Jurassic Park, Trissa is a juvenile Triceratops. She can be viewed in our nursery for now.',
      population: 2,
    },
    {
      name: 'Victoria',
      species: 'Velociraptor',
      description:
        'Our oldest and largest Raptor, Victoria leads our ferocious pack of apex predators at Jurassic Park!',
      population: 3,
    },
    {
      name: 'Tiger',
      species: 'Velociraptor',
      description:
        "Named for the stripes on her back, Tiger is the fastest Raptor we have. Measured at 56mph in the open, prey doesn't stand a chance when she's on the prowl",
      population: 3,
    },
    {
      name: 'Princess',
      species: 'Velociraptor',
      description:
        'Princess is the youngest and newest member of the Jurassic Park raptor pack. Her small size deceptively hides her predatory power.',
      population: 3,
    },
  ]);
};

// seedDb().then(() => {
//   mongoose.connection.close();
// });
