const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');
const mongoose = require('mongoose');
const wrapAsync = require('../utils/wrapAsync');

mongoose.connect('mongodb://127.0.0.1:27017/jurassicpark');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected!');
});

router.use(express.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  res.render('contact');
});
router.post(
  '/',
  wrapAsync(async (req, res, next) => {
    const contact = new Contact(req.body.contact);
    await contact.save();
    res.redirect('/');
  })
);

module.exports = router;
