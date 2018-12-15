import { ADD_MOVIE, REMOVE_MOVIE } from '../actions/types';

export default function(
  state = [
    {
      id: 0,
      name: 'Dracula',
      url:
        'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Dracula_One_Sheet_Style_F.jpg/220px-Dracula_One_Sheet_Style_F.jpg',
      description: 'some description',
      genre: 'horror'
    },
    {
      id: 0,
      name: 'Amelie',
      url:
        'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Amelie_poster.jpg/220px-Amelie_poster.jpg',
      description: 'some description',
      genre: 'romance'
    }
  ],
  action
) {
  switch (action.type) {
    case ADD_MOVIE:
      return [...state, action.payload];
    case REMOVE_MOVIE:
      return state.map(movie => {
        if (movie.id !== action.payload) {
          return movie;
        }
      });
    default:
      return state;
  }
}
