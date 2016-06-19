import { Router } from 'express';
import * as MovieController from '../controllers/movie.controller';
const router = new Router();

// Get all Movies
router.route('/movies').get(MovieController.getMovies);

// Get one movie by title
router.route('/movies/:slug').get(MovieController.getMovie);

// Add a new Movie
router.route('/movies').post(MovieController.addMovie);

// Delete a Movie
router.route('/movies').delete(MovieController.deleteMovie);

export default router;
