import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Movie from './Movie';

class MovieGrid extends Component {
  renderMovies = () => {
    return this.props.movies.map((movie, index) => {
      if (
        !this.props.filters.movieGenre ||
        movie.genre.toLowerCase() ===
          this.props.filters.movieGenre.toLowerCase()
      ) {
        return <Movie {...this.props} key={movie.name + index} movie={movie} />;
      }
    });
  };

  render() {
    return (
      <Fragment>
        <h4>Movies</h4>
        <div className='movies'>{this.renderMovies()}</div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(MovieGrid);
