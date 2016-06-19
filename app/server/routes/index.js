const routes = require('express').Router();
const movies = require('../controllers/movies');

routes.get('/api', (req, res) => {
  res
    .json({
      message: 'Welcome to the server',
    });
});

routes.use('/api/movies', movies);

module.exports = routes;
