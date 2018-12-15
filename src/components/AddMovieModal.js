import React, { Component } from 'react';

class AddMovieModal extends Component {
  render() {
    return (
      <div className='add-movie'>
        <form>
          <input type='text' name='moviename' value='' />
          <input type='text' name='movieurl' value='' />
          <input type='text' name='moviedescription' value='' />
          <input type='text' name='moviegenre' value='' />
          <button type='button'>Add Movie</button>
        </form>
      </div>
    );
  }
}

export default AddMovieModal;
