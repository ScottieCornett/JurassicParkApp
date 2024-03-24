const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync');
const { validateContact } = require('../middleware');
const contacts = require('../controllers/contacts');

router.use(express.urlencoded({ extended: true }));

router
  .route('/')
  .get(contacts.renderContactForm)
  .post(validateContact, wrapAsync(contacts.createContact));

module.exports = router;
