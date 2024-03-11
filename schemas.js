const Joi = require('joi');

module.exports.contactSchema = Joi.object({
  contact: Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    streetAddress: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    zipCode: Joi.string().required(),
    telephoneNumber: Joi.string(),
  }).required(),
});
