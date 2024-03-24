const express = require('express');
const { isLoggedIn } = require('../middleware');
const router = express.Router();
const page = require('../controllers/thanks');

router.get('/', isLoggedIn, page.renderThankYou);

module.exports = router;
