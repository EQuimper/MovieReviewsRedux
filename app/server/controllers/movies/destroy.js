const Movie = require('../../models/movies');

// Delete a movie
const deleteMovie = (req, res) => {
  const movieId = req.body._id;
  Movie.findById(movieId).exec((err, movie) => { // eslint-disable-line consistent-return
    if (err) {
      return res.status(500).send(err);
    }

    movie.remove(() => {
      return res.status(200).end();
    });
  });
};

module.exports = deleteMovie;
