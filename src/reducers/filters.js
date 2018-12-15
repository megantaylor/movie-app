import { FILTER_MOVIE_TITLE, FILTER_GENRE } from '../actions/types';
import { combineReducers } from 'redux';

const movieTitle = (state = '', action) => {
  switch (action.type) {
    case FILTER_MOVIE_TITLE:
      return action.payload;
    default:
      return state;
  }
};

const movieGenre = (state = '', action) => {
  switch (action.type) {
    case FILTER_GENRE:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({ movieTitle, movieGenre });
