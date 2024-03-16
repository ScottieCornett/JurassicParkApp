const mongoose = require('mongoose');
const Dinosaur = require('../models/dinosaur');

mongoose.connect('mongodb://127.0.0.1:27017/jurassicpark');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected!');
});

const seedDinos = async () => {
  await Dinosaur.deleteMany({});
  await Dinosaur.insertMany([
    {
      name: 'Sue',
      species: 'Tyrannosaurus',
      description:
        'The star of the show! Sue is a fearsome beast to behold. Gaze at your own risk!!',
      population: 1,
      admin: '65f4e2cdd1dcbf93ea9c98a4',
      image: {
        url: 'https://res.cloudinary.com/dly9qoqoo/image/upload/v1708560746/jurassicpark/agcrgehlwravhreymsgv.png',
        fileName: 'jurassicpark/agcrgehlwravhreymsgv',
      },
    },
    {
      name: 'Cera',
      species: 'Triceratops',
      description:
        'Cera is our adult Triceratops. Her brow horns are over 3 feet long!',
      population: 2,
      admin: '65f4e2cdd1dcbf93ea9c98a4',
      image: {
        url: 'https://res.cloudinary.com/dly9qoqoo/image/upload/v1708818093/jurassicpark/trike1_mealqf.png',
        fileName: 'jurassicpark/trike1_mealqf',
      },
    },
    {
      name: 'Trisha',
      species: 'Triceratops',
      description:
        'Our newest addition to Jurassic Park, Trisha is a juvenile Triceratops. She can be viewed in our nursery for now.',
      population: 2,
      admin: '65f4e2cdd1dcbf93ea9c98a4',
      image: {
        url: 'https://res.cloudinary.com/dly9qoqoo/image/upload/v1708818092/jurassicpark/babytrike_njglnd.png',
        fileName: 'jurassicpark/babytrike_njglnd',
      },
    },
    {
      name: 'Victoria',
      species: 'Velociraptor',
      description:
        'Our oldest and largest Raptor, Victoria leads our ferocious pack of apex predators at Jurassic Park!',
      population: 3,
      admin: '65f4e2cdd1dcbf93ea9c98a4',
      image: {
        url: 'https://res.cloudinary.com/dly9qoqoo/image/upload/v1708821022/jurassicpark/raptor2_mp2att.png',
        fileName: 'jurassicpark/raptor2_mp2att',
      },
    },
    {
      name: 'Blue',
      species: 'Velociraptor',
      description:
        "Named for the blue stripe on her back, Blue is the fastest Raptor we have. Measured at 56mph in the open, prey doesn't stand a chance when she's on the prowl",
      population: 3,
      admin: '65f4e2cdd1dcbf93ea9c98a4',
      image: {
        url: 'https://res.cloudinary.com/dly9qoqoo/image/upload/v1708821023/jurassicpark/raptor4_nv0x4u.png',
        fileName: 'jurassicpark/raptor4_nv0x4u',
      },
    },
    {
      name: 'Delta',
      species: 'Velociraptor',
      description:
        'Delta is the youngest and newest member of the Jurassic Park raptor pack. Do not let her young age fool you -- she is wise beyond her years at hunting.',
      population: 3,
      admin: '65f4e2cdd1dcbf93ea9c98a4',
      image: {
        url: 'https://res.cloudinary.com/dly9qoqoo/image/upload/v1708821023/jurassicpark/raptor5_naxsq8.png',
        fileName: 'jurassicpark/raptor5_naxsq8',
      },
    },
    {
      name: 'Ami',
      species: 'Ankylosaurus',
      description:
        'Ami is a walking tank. Despite her fearsome appearance, she is one of our nicest dinosaurs!!',
      population: 1,
      admin: '65f4e2cdd1dcbf93ea9c98a4',
      image: {
        url: 'https://res.cloudinary.com/dly9qoqoo/image/upload/v1708824218/jurassicpark/anky1_q82qmw.png',
        fileName: 'jurassicpark/anky1_q82qmw',
      },
    },
    {
      name: 'Littlefoot',
      species: 'Brachiosaurus',
      description:
        "Littlefoot's 18 foot neck can be seen from over a mile away. She's our largest and friendliest dinosaur!",
      population: 1,
      admin: '65f4e2cdd1dcbf93ea9c98a4',
      image: {
        url: 'https://res.cloudinary.com/dly9qoqoo/image/upload/v1708824219/jurassicpark/brachy1_hue6r1.png',
        fileName: 'jurassicpark/brachy1_hue6r1',
      },
    },
  ]);
};

seedDinos().then(() => {
  mongoose.connection.close();
});
