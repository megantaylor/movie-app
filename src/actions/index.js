import {
  ADD_MOVIE,
  REMOVE_MOVIE,
  FILTER_MOVIE_TITLE,
  FILTER_GENRE
} from './types';

export function addMovie(movie = {}) {
  return {
    type: ADD_MOVIE,
    payload: movie
  };
}

export function removeMovie(movie = '') {
  return {
    type: REMOVE_MOVIE,
    payload: movie
  };
}

export function filterMoviesByTitle(movie = '') {
  return {
    type: FILTER_MOVIE_TITLE,
    payload: movie
  };
}

export function filterMoviesByGenre(genre = '') {
  return {
    type: FILTER_GENRE,
    payload: genre
  };
}
