const Movie = require('../../models/movies');

const getMovies = (req, res) => {
  Movie.find().sort('-dateAdded').exec((err, movies) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.json({ movies });
  });
};

module.exports = getMovies;
