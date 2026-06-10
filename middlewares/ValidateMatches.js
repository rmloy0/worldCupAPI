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

const updateMatchSchema = Joi.object({
  matchDate: Joi.date(),
  homeTeam: Joi.string(),
  awayTeam: Joi.string(),
  round: Joi.string(),
  group: Joi.string(),
  stadium: Joi.string(),
  score: Joi.object({
    home: Joi.number().integer(),
    away: Joi.number().integer(),
  }),
}).min(1);

const validateCreateMatch = (req, res, next) => {
  const { error } = createMatchSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  next();
};

const validateUpdateMatch = (req, res, next) => {
  const { error } = updateMatchSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  next();
};

module.exports = {
  validateCreateMatch,
  validateUpdateMatch,
};
