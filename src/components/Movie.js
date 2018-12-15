import React, { Component } from 'react';

class Movie extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className='movie'>
        <img src={movie.url} alt={movie.name} />
      </div>
    );
  }
}

export default Movie;
