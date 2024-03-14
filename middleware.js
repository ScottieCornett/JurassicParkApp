const { contactSchema } = require('./schemas.js');
const ExpressError = require('./utils/ExpressError');
const Contact = require('./models/contact');

module.exports.validateContact = (req, res, next) => {
  const { error } = contactSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(',');
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    console.log(req.path, req.originalUrl);
    req.flash('error', 'You must be signed in first');
    return res.redirect('/signin');
  }
  next();
};
