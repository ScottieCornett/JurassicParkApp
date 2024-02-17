const mongoose = require('mongoose');
const Dinosaur = require('../models/dinosaur');

mongoose.connect('mongodb://127.0.0.1:27017/jurassicpark');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected!');
});

const seedDinos = async () => {
  await Dinosaur.insertMany([
    {
      name: 'Sue',
      species: 'Tyrannosaurus Rex',
      description:
        'The star of the show! Sue is a fearsome beast to behold. Gaze at your own risk!!',
      population: 1,
      flagged: false,
      flag: 'NONE',
      status: 'GREEN',
    },
    {
      name: 'Cera',
      species: 'Triceratops',
      description:
        'Cera is our adult Triceratops. Her brow horns are over 3 feet long!',
      population: 2,
      flagged: false,
      flag: 'NONE',
      status: 'GREEN',
    },
    {
      name: 'Trisha',
      species: 'Triceratops',
      description:
        'Our newest addition to Jurassic Park, Trisha is a juvenile Triceratops. She can be viewed in our nursery for now.',
      population: 2,
      flagged: false,
      flag: 'NONE',
      status: 'GREEN',
    },
    {
      name: 'Victoria',
      species: 'Velociraptor',
      description:
        'Our oldest and largest Raptor, Victoria leads our ferocious pack of apex predators at Jurassic Park!',
      population: 3,
      flagged: false,
      flag: 'NONE',
      status: 'GREEN',
    },
    {
      name: 'Tiger',
      species: 'Velociraptor',
      description:
        "Named for the stripes on her back, Tiger is the fastest Raptor we have. Measured at 56mph in the open, prey doesn't stand a chance when she's on the prowl",
      population: 3,
      flagged: false,
      flag: 'NONE',
      status: 'GREEN',
    },
    {
      name: 'Princess',
      species: 'Velociraptor',
      description:
        'Princess is the youngest and newest member of the Jurassic Park raptor pack. Her small size deceptively hides her predatory power.',
      population: 3,
      flagged: false,
      flag: 'NONE',
      status: 'GREEN',
    },
    {
      name: 'Ducky',
      species: 'Hadrosaur',
      description:
        'Ducky is a happy-go-lucky swimmer. She loves spending time in our many ponds that we have on the island.',
      population: 1,
      flagged: false,
      flag: 'NONE',
      status: 'GREEN',
    },
    {
      name: 'Petri',
      species: 'Pterodactyl',
      description:
        'Our winged animal, Petri is actually not a dinosaur. However, her kind died out during the late Jurassic Period, over 150 million years ago',
      population: 1,
      flagged: false,
      flag: 'NONE',
      status: 'GREEN',
    },
    {
      name: 'Spike',
      species: 'Stegosaurus',
      description:
        'Coming at over 20 feet in length, Spike is an amazing sight. Her two rows of plates on her back provide the armor she needed from carnivores when her species roamed the earth',
      population: 1,
      flagged: false,
      flag: 'NONE',
      status: 'GREEN',
    },
    {
      name: 'Littlefoot',
      species: 'Apatosaurus',
      description:
        "Littlefoot's 18 foot neck can be seen from over a mile away. She's our largest and friendliest dinosaur!",
      population: 1,
      flagged: false,
      flag: 'NONE',
      status: 'GREEN',
    },
  ]);
};

// seedDinos().then(() => {
//   mongoose.connection.close();
// });
