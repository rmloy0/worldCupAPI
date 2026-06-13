const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('./auth/passport');
const { initDB } = require('./database');
require('dotenv').config();
const swaggerUI = require('swagger-ui-express');
//const swaggerDocument = require('./swagger.json');
const swaggerDocument = JSON.parse(require('fs').readFileSync('./swagger.json', 'utf8'));
const authRoutes = require('./auth/routes');

const port = process.env.PORT || 4000;
const app = express();

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/auth', authRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});

initDB((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
