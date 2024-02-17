const express = require('express');
const router = express.Router();
const Dinosaur = require('../models/dinosaur');
const mongoose = require('mongoose');
const wrapAsync = require('../utils/wrapAsync');

mongoose.connect('mongodb://127.0.0.1:27017/jurassicpark');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected!');
});

router.get('/', async (req, res) => {
  const dinosaurs = await Dinosaur.find({});
  res.render('dinos/index', { dinosaurs });
});

router.get(
  '/:id',
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const dinosaur = await Dinosaur.findById(id);
    res.render('dinos/show', { dinosaur });
  })
);

module.exports = router;
