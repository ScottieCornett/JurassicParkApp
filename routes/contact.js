const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');
const wrapAsync = require('../utils/wrapAsync');
const { validateContact } = require('../middleware');

router.use(express.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  res.render('contact');
});
router.post(
  '/',
  validateContact,
  wrapAsync(async (req, res, next) => {
    const contact = new Contact(req.body.contact);
    await contact.save();
    res.render('thankyou');
  })
);

module.exports = router;
