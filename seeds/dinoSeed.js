const mongoose = require('mongoose');
const Dinosaur = require('../models/dinosaur');

// mongoose.connect('mongodb://127.0.0.1:27017/jurassicpark');
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('Database connected!');
// });
mongoose
  .connect('mongodb://127.0.0.1:27017/jurassicpark2')
  .then(() => {
    console.log('Connection open!');
  })
  .catch((err) => {
    console.log('Error: ', err);
  });

const seedDinos = async () => {
  await Dinosaur.deleteMany({});
  await Dinosaur.insertMany([
    {
      name: 'Sue',
      species: 'Tyrannosaurus',
      scientificName: 'Tyrannosaurus Rex',
      length: '41 ft (12.4 m)',
      height: '13 ft (4m) at the hip',
      weight: '18,000 lbs',
      historicalPeriod: 'Late Cretaceous',
      description:
        'In Latin, Rex means "King". Since all of our animals are female, it is safe to call Sue the Queen instead. Weighing in at over 8 tons, she is the fiercest predator to ever walk the Earth. Her 5 foot long skull is jammed packed with bone crushing teeth up to 12 inches in length! Visit her at the Tyrannosaurs Rex Kingdom at Jurassic Park.. If you dare.',
      funFact:
        'The T-Rex has one of the best eyesights of all time. For comparison, it can see 13 times greater than a human being!',
      population: 1,
      image: {
        url: 'https://res.cloudinary.com/dly9qoqoo/image/upload/v1708560746/jurassicpark/agcrgehlwravhreymsgv.png',
        fileName: 'jurassicpark/agcrgehlwravhreymsgv',
      },
    },
    {
      name: 'Cera',
      species: 'Triceratops',
      scientificName: 'Triceratops horridus',
      length: '30 ft (9m)',
      height: '7.5 ft (2.3m)',
      weight: '16,000 lbs',
      historicalPeriod: 'Late Cretaceous',
      description:
        'Cera is our adult Triceratops. She weighs over 12 tons. For comparison, a bull African elephant weight around 5-6 tons! Her frilled skull has two brow horns that are over three feet long and single horn on her snout. In the time of the dinosaurs, the horns were used for defense from large predators such as Tyrannosaurus.',
      funFact:
        'The name Triceratops comes from the Greek for "three-horned face"',
      population: 2,
      image: {
        url: 'https://res.cloudinary.com/dly9qoqoo/image/upload/v1708818093/jurassicpark/trike1_mealqf.png',
        fileName: 'jurassicpark/trike1_mealqf',
      },
    },
    {
      name: 'Trisha',
      species: 'Triceratops',
      scientificName: 'Triceratops horridus',
      length: '10 ft (3.3 m)',
      height: '3 ft (1m)',
      weight: '5000 lbs',
      historicalPeriod: 'Late Cretaceous',
      description:
        'Our newest addition to Jurassic Park, Trisha is a juvenile Triceratops. Although she is just a baby, she weighs close to 5000 pounds! Due to her young age, she has not been fully introduced to the park setting just yet. Until then, you can visit her in the Jurassic Park nursery.',
      funFact: 'The triceratops can have up to 800 teeth!',
      population: 2,
      image: {
        url: 'https://res.cloudinary.com/dly9qoqoo/image/upload/v1708818092/jurassicpark/babytrike_njglnd.png',
        fileName: 'jurassicpark/babytrike_njglnd',
      },
    },
    {
      name: 'Victoria',
      species: 'Velociraptor',
      scientificName: 'Velociraptor mongoliensis',
      length: '12 ft (3.7 m)',
      height: '6.5 ft (2.1 m)',
      weight: '650 lbs',
      historicalPeriod: 'Late Cretaceous',
      description:
        'Our oldest and largest Raptor, Victoria leads our ferocious pack of apex predators at Jurassic Park! To establish as natural an environment as possible, live prey is introduced into the Raptor Pen twice daily. You can watch as Victoria leads our other two Raptors-- Blue and Delta-- on ambush style hunts. Be warned, however. This part of the show is not for the squeamish or faint of heart.',
      funFact:
        'The Velociraptor has a sickle shaped claw on the second toe of each foot. This claw enables the raptor to slash open its prey with a single downward strike.',
      image: {
        url: 'https://res.cloudinary.com/dly9qoqoo/image/upload/v1708821022/jurassicpark/raptor2_mp2att.png',
        fileName: 'jurassicpark/raptor2_mp2att',
      },
    },
    {
      name: 'Blue',
      species: 'Velociraptor',
      scientificName: 'Velociraptor mongoliensis',
      length: '12 ft (3.7 m)',
      height: '6 ft (1.8 m)',
      weight: '500 lbs',
      historicalPeriod: 'Late Cretaceous',
      description:
        "Named for the blue stripe on her back, Blue is the fastest Raptor we have. Measured at 56mph in the open, prey doesn't stand a chance when she's on the prowl. Although Blue is not our largest Raptor, she does have the largest sickle claw of all of our Raptors. It measures in at over 7 inches in total length!",
      funFact:
        'The Velociraptor has long forelimbs that ends with prehensile (grasping) hands. No wonder they learned how to open doors!',
      population: 3,
      image: {
        url: 'https://res.cloudinary.com/dly9qoqoo/image/upload/v1708821023/jurassicpark/raptor4_nv0x4u.png',
        fileName: 'jurassicpark/raptor4_nv0x4u',
      },
    },
    {
      name: 'Delta',
      species: 'Velociraptor',
      scientificName: 'Velociraptor mongoliensis',
      length: '11 ft (3.4 m)',
      height: '5.5 ft (1.7 m)',
      weight: '450 lbs',
      historicalPeriod: 'Late Cretaceous',
      description:
        'Delta is the youngest and newest member of the Jurassic Park raptor pack. Do not let her young age fool you -- she is wise beyond her years at hunting. She was introduced to the pack last fall and quickly earned her place. ',
      funFact:
        'The Velociraptor has a sleek body built for speed, which makes it a incredibly effective predator.',
      population: 3,
      image: {
        url: 'https://res.cloudinary.com/dly9qoqoo/image/upload/v1708821023/jurassicpark/raptor5_naxsq8.png',
        fileName: 'jurassicpark/raptor5_naxsq8',
      },
    },
    {
      name: 'Ami',
      species: 'Ankylosaurus',
      scientificName: 'Ankylosaurus magniventris',
      length: '26 ft (8 m)',
      height: '5 ft (1.5 m)',
      weight: '16,000 lbs',
      historicalPeriod: 'Late Cretaceous',
      description:
        'Ami is a walking tank. Covered in bony plates and having a massive club at the end of her tail, Ami is fearsome in her appearance. She is one of our better dinosaurs to observe, as she moves at a very slow pace. You can usually spot her casually grazing on the Jurassic Park plant life in her paddock, where she eats around 120 pounds of plant matter a day.',
      funFact:
        'The Ankylosaurus feeds on low-growing plants and shrubs. Back in the time of the dinosaurs, it relied on its bony plates for protection.',
      population: 1,
      image: {
        url: 'https://res.cloudinary.com/dly9qoqoo/image/upload/v1708824218/jurassicpark/anky1_q82qmw.png',
        fileName: 'jurassicpark/anky1_q82qmw',
      },
    },
    {
      name: 'Littlefoot',
      species: 'Brachiosaurus',
      scientificName: 'Brachiosaurus altithorax',
      length: '72 ft (22 m)',
      height: '31 ft (9.4 m)',
      weight: '99,000 lbs',
      historicalPeriod: 'Late Jurassic',
      description:
        'When one thinks of a dinosaur, the Brachiosaurus is one of the first things to come to mind. They are iconic in their size and shape, and Littlefoot is no exception. She is a marvel to behold. As a matter of fact, her 18 foot neck can be seen from over a mile away. Despite her enormous size, she is our friendliest dinosaur!',
      funFact:
        'Our heaviest dinosaur, Littlefoot weighs more than 20 fully grown African elephants!',
      population: 1,
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
