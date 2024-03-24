const Contact = require('../models/contact');

module.exports.renderContactForm = (req, res) => {
  res.render('contact');
};

module.exports.createContact = async (req, res, next) => {
  const contact = new Contact(req.body.contact);
  await contact.save();
  res.render('thankyou');
};
