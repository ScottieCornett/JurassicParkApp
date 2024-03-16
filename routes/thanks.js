const express = require('express');
const { isLoggedIn } = require('../middleware');
const router = express.Router();

router.get('/', isLoggedIn, (req, res) => {
  res.render('thankyou');
});

module.exports = router;
