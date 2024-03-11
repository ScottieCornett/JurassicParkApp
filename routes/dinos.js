const express = require('express');
const router = express.Router();
const Dinosaur = require('../models/dinosaur');
const wrapAsync = require('../utils/wrapAsync');

router.get('/', async (req, res) => {
  const dinosaurs = await Dinosaur.find({});
  res.render('dinos/index', { dinosaurs });
});

router.get('/new', (req, res) => {
  res.render('dinos/new');
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
