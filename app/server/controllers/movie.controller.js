import Movie from '../models/movies';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

// Get all movies
export const getMovies = (req, res) => {
  Movie.find().sort('-dateAdded').exec((err, movies) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.json({ movies });
  });
};

// Create a movie

export const addMovie = (req, res) => { // eslint-disable-line consistent-return
  if (!req.body.movie.title || !req.body.movie.director || !req.body.movie.written_by) {
    return res.status(403).end();
  }

  const newMovie = new Movie(req.body.movie);

  // Let's sanitize inputs
  newMovie.title = sanitizeHtml(newMovie.title);
  newMovie.director = sanitizeHtml(newMovie.director);
  newMovie.genre = sanitizeHtml(newMovie.genre);
  newMovie.rating = sanitizeHtml(newMovie.rating);
  newMovie.run_time = sanitizeHtml(newMovie.run_time);
  newMovie.written_by = sanitizeHtml(newMovie.written_by);
  newMovie.description = sanitizeHtml(newMovie.description);
  newMovie.image_url = sanitizeHtml(newMovie.image_url);

  newMovie.slug = slug(newMovie.title.toLowerCase(), { lowercase: true });
  newMovie.cuid = cuid();
  newMovie.save((err, saved) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.json({ movie: saved });
  });
};

// Get a single movie
export const getMovie = (req, res)  => {
  const newSlug = req.params.slug.split('-');
  const newCuid = newSlug[newSlug.length - 1];
  Movie.findOne({ cuid: newCuid }).exec((err, movie) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.json({ movie });
  });
};

// Delete a movie
export const deleteMovie = (req, res) => {
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
