const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync');
const { isLoggedIn, isAdmin } = require('../middleware');
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });
const dinosaurs = require('../controllers/dinosaurs');

router
  .route('/')
  .get(dinosaurs.index)
  .post(
    isLoggedIn,
    upload.single('image'),
    wrapAsync(dinosaurs.createDinosaur)
  );
router.get('/new', isLoggedIn, (req, res) => {
  res.render('dinos/new');
});

router
  .route('/:id')
  .get(wrapAsync(dinosaurs.showDinosaur))
  .put(isLoggedIn, upload.single('image'), wrapAsync(dinosaurs.editDinosaur))
  .delete(isLoggedIn, wrapAsync(dinosaurs.deleteDinosaur));

router.get('/:id/edit', isLoggedIn, wrapAsync(dinosaurs.renderEditDinosaur));

module.exports = router;
