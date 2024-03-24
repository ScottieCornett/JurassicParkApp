const User = require('../models/user');

module.exports.renderRegister = (req, res) => {
  res.render('users/register');
};

module.exports.registerUser = async (req, res, next) => {
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
};

module.exports.renderSignIn = (req, res) => {
  res.render('users/signin');
};

module.exports.signIn = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const foundUser = await User.findAndValidate(username, password);
    if (foundUser) {
      req.flash('success', `Welcome back, ${foundUser.username}`);
      req.session.user = foundUser;
      res.redirect('/');
    } else {
      req.flash('error', 'Login attempt unsuccessful');
      return res.redirect('/signin');
    }
  } catch (error) {
    next();
  }
};

module.exports.logout = (req, res) => {
  req.session.user = null;
  req.flash('success', 'Goodbye!');
  res.redirect('/signin');
};
