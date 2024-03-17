const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync');
const User = require('../models/user');

router.get('/register', (req, res) => {
  res.render('users/register');
});
router.post(
  '/register',
  wrapAsync(async (req, res, next) => {
    try {
      const { username, email, password } = req.body;
      const newUser = new User({
        username: username,
        email: email,
        password: password,
      });
      await newUser.save();
      req.session.user = newUser;
      req.flash('success', `Welcome to Jurassic Park`);
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

router.post('/signin', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const foundUser = await User.findAndValidate(username, password);
    if (foundUser) {
      req.flash('success', `Welcome back, ${foundUser.username}`);
      // req.session.user_id = foundUser._id;
      req.session.user = foundUser;
      // const redirectUrl = req.session.returnTo || '/';
      // delete req.session.returnTo;
      res.redirect('/');
    } else {
      req.flash('error', 'Login attempt unsuccessful');
      return res.redirect('/signin');
    }
  } catch (error) {
    next();
  }
});

router.post('/logout', (req, res) => {
  req.session.user = null;
  req.flash('success', 'Goodbye!');
  res.redirect('/signin');
});

module.exports = router;
