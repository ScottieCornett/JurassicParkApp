const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync');
const User = require('../models/user');
const passport = require('passport');

router.get('/register', (req, res) => {
  res.render('users/register');
});
router.post(
  '/register',
  wrapAsync(async (req, res) => {
    try {
      const { email, username, password } = req.body;
      const user = new User({ email, username });
      const registeredUser = await User.register(user, password);
      req.flash('success', 'Welcome to Jurassic Park!');
      res.redirect('/');
    } catch (e) {
      req.flash('error', 'Registration Failed!');
      res.redirect('register');
    }
  })
);

router.get('/signin', (req, res) => {
  res.render('users/signin');
});

router.post(
  '/signin',
  passport.authenticate('local', {
    failureFlash: true,
    failureRedirect: '/signin',
  }),
  (req, res) => {
    req.flash('success', 'Welcome Back!');
    res.redirect('/dinosaurs');
  }
);

module.exports = router;