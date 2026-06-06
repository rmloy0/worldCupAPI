const Joi = require('joi');

const playerSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  country: Joi.string().required(),
  age: Joi.number().integer().required(),
  club: Joi.string().required(),
  league: Joi.string().required(),
  fifaRanking: Joi.number().integer().required(),
  previousWorldCups: Joi.number().integer().required(),
  worldCupGoals: Joi.number().integer().required(),
  hobbies: Joi.array().items(Joi.string()).min(1).required(),
  position: Joi.string().required()
});

const validatePlayer = (req, res, next) => {
  const { error } = playerSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  next();
};

module.exports = validatePlayer;
