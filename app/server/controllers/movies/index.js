const movies = require('express').Router();

let
  all = require('./all'),
  single = require('./single'),
  create = require('./create'),
  destroy = require('./destroy');

movies
  .get('/', all)
  .get('/:id', single)
  .post('/', create)
  .delete('/:id', destroy);

module.exports = movies;
