const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the model
const movieSchema = new Schema({
  title: { type: String, required: [true, 'Movie title is required'] },
  director: { type: String, required: [true, 'This movie need a director no ?'] },
  genre: { type: String, required: false },
  slug: { type: String, required: true },
  cuid: { type: String, required: true },
  dateAdded: { type: Date, default: Date.now, required: true },
  rating: { type: String, required: false },
  run_time: { type: Number, required: false },
  written_by: { type: [String], required: [true, 'This movie must be have some author no?'] },
  description: { type: String, required: true },
  image_url: { type: String, required: false },
});

module.exports = mongoose.model('Movie', movieSchema);
