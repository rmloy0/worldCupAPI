const Joi = require('joi');

const Joi = require('joi');

const MatchSchema = Joi.object({
  matchDate: Joi.date().required(),
  homeTeam: Joi.string().required(),
  awayTeam: Joi.string().required(),
  round: Joi.string().required(),
  group: Joi.string().optional(),
  stadium: Joi.string().optional(),
  score: Joi.object({
    home: Joi.number().integer().required(),
    away: Joi.number().integer().required(),
  }).required(),
});

const validateMatch = (req, res, next) => {
  const { error } = MatchSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  next();
};

module.exports = validateMatch;
