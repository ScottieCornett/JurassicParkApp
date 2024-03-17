const { contactSchema } = require('./schemas.js');
const ExpressError = require('./utils/ExpressError');

module.exports.validateContact = (req, res, next) => {
  const { error } = contactSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(',');
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

// module.exports.validateDinosaur = (req, res, next) => {
//   const { error } = dinosaurSchema.validate(req.body);
//   if (error) {
//     const msg = error.details.map((el) => el.message).join(',');
//     throw new ExpressError(msg, 400);
//   } else {
//     next();
//   }
// };

module.exports.isAdmin = async (req, res, next) => {
  if (!req.session.user.isAdmin) {
    req.flash('error', 'You do not have permission to do that');
    return res.redirect(`/signin`);
  }
  next();
};

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.session.user) {
    req.session.returnTo = req.originalUrl;
    req.flash('error', 'Sorry, you must be signed in to do that');
    return res.redirect('/signin');
  }
  next();
};
