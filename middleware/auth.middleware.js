const Joi = require('joi');

const registrationSchema = Joi.object({
  mobile: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
  adhar: Joi.string().length(12).pattern(/^[0-9]+$/).required(),
  email: Joi.string().email().required(),
  username: Joi.string().required(),
  dob: Joi.string().required(),
  gender: Joi.string().required(),
  pan: Joi.string().required(),
  address: Joi.string().required(),
  city: Joi.string().required(),
  state: Joi.string().required(),
  pincode: Joi.string().required(),
  photo: Joi.string().required(),
  video: Joi.string().required()
});

const validateRegistration = (req, res, next) => {
  const { error } = registrationSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({
      errors: error.details.map(detail => detail.message)
    });
  }
  next();
};
  
module.exports = validateRegistration;