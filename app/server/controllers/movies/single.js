const Movie = require('../../models/movies');

// Get a single movie
const getMovie = (req, res) => {
  const newSlug = req.params.slug.split('-');
  const newCuid = newSlug[newSlug.length - 1];
  Movie.findOne({ cuid: newCuid }).exec((err, movie) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.json({ movie });
  });
};

module.exports = getMovie;
