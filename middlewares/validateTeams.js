const Joi = require('joi');

const Joi = require('joi');

const TeamSchema = Joi.object({
  country: Joi.string().required(),
  worldCupTitles: Joi.number().integer().required(),
  continent: Joi.string().required(),
  confederation: Joi.string().required(),
  flagColors: Joi.array().items(Joi.string()).min(1).required(),
  fifaRanking: Joi.number().integer().required(),
  coach: Joi.string().required(),
});

const validateTeams = (req, res, next) => {
  const { error } = TeamSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  next();
};

module.exports = validateTeams;
