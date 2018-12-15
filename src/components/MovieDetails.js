import React, { Component } from 'react';

class MovieDetails extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className='movie-details'>
        <img src={movie.url} alt={movie.name} className='' />
        <h1>{movie.Name}</h1>
        <p className='movie-description'>{movie.description}</p>
        <p className='movie-genre'>{movie.genre}</p>
        <button type='button'>Remove Movie</button>
      </div>
    );
  }
}

export default MovieDetails;
