const Movie = require('../../models/movies');
const cuid = require('cuid');
const slug = require('limax');
const sanitizeHtml = require('sanitize-html');

const addMovie = (req, res) => { // eslint-disable-line consistent-return
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

module.exports = addMovie;
