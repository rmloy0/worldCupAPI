const Joi = require('joi');

const stadiumSchema = Joi.object({
  stadiumName: Joi.string().required(),
  city: Joi.string().required(),
  location: Joi.string().required(),
  country: Joi.string().required(),
  builtDate: Joi.date().required(),
  capacity: Joi.number().integer().required(),
  amenities: Joi.array().items(Joi.string()).min(1).required(),
  funFacts: Joi.array().items(Joi.string()).min(1).required()
});

const validateStadium = (req, res, next) => {
  const { error } = stadiumSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  next();
};

module.exports = validateStadium;