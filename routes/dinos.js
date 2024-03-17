const express = require('express');
const router = express.Router();
const Dinosaur = require('../models/dinosaur');
const wrapAsync = require('../utils/wrapAsync');
const { isLoggedIn, isAdmin } = require('../middleware');
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

router.get('/', async (req, res) => {
  const dinosaurs = await Dinosaur.find({});
  res.render('dinos/index', { dinosaurs });
});

router.get('/new', (req, res) => {
  res.render('dinos/new');
});
router.post(
  '/',
  upload.single('image'),
  wrapAsync(async (req, res, next) => {
    const dinosaur = new Dinosaur(req.body.dinosaur);
    dinosaur.image.url = req.file.path;
    dinosaur.image.fileName = req.file.filename;
    await dinosaur.save();
    req.flash('success', 'Successfully made a new dinosaur');
    res.redirect(`/dinosaurs/${dinosaur._id}`);
  })
);

router.get(
  '/:id',
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const dinosaur = await Dinosaur.findById(id);
    res.render('dinos/show', { dinosaur });
  })
);
router.get(
  '/:id/edit',
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const dinosaur = await Dinosaur.findById(id);
    if (!dinosaur) {
      req.flash('error', 'Dinosaur does not exist');
      return res.redirect('/');
    }
    res.render('dinos/edit', { dinosaur });
  })
);
router.put(
  '/:id',
  upload.single('image'),
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const dinosaur = await Dinosaur.findByIdAndUpdate(id, {
      ...req.body.dinosaur,
    });

    dinosaur.image.url = req.file.path;
    dinosaur.image.fileName = req.file.filename;
    await dinosaur.save();
    req.flash('success', 'You successfully updated a dinosaur');
    res.redirect(`/dinosaurs/${dinosaur._id}`);
  })
);
router.delete(
  '/:id',
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Dinosaur.findByIdAndDelete(id);
    req.flash('success', 'Successfully deleted dinosaur :(');
    res.redirect('/');
  })
);
module.exports = router;
