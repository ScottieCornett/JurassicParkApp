const express = require('express');
const router = express.Router();
const page = require('../controllers/bookTrip');

router.get('/', page.renderBookTripPage);

module.exports = router;
