import React, { Component } from 'react';
import MovieGrid from './components/MovieGrid';
import Genres from './components/Genres';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <aside>
          <Genres />
        </aside>
        <article>
          <MovieGrid />
        </article>
      </div>
    );
  }
}

export default App;
