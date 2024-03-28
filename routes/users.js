const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync');
const users = require('../controllers/users');

router
  .route('/register')
  .get(users.renderRegister)
  .post(wrapAsync(users.registerUser));

router.route('/signin').get(users.renderSignIn).post(wrapAsync(users.signIn));

router.post('/logout', users.logout);

module.exports = router;
