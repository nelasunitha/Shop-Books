import React, { Component } from 'react';
import { updateBook, createBooks } from '../redux/books';
import { fetchSingleBook, setSingleBook } from '../redux/singleBook';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//component for creating new robot

class EditBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      author: '',
      genre: '',
      publishedYear: '',
      price: '',
    };
    //binding event handlers
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //event handlers
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateBook({ ...this.props.match.params.id, ...this.state });
  }
  //rendering data
  render() {
    const { name, author, genre, publishedYear, price } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <div>
        <form id='add-form' onSubmit={handleSubmit}>
          <p>
            <input
              type='text'
              name='name'
              placeholder='Name'
              value={name}
              onChange={(evt) => handleChange(evt)}
            />
          </p>
          <input
            type='text'
            name='author'
            placeholder='Author'
            value={author}
            onChange={(evt) => handleChange(evt)}
          />
          <p>
            <input
              type='text'
              name='genre'
              placeholder='Genre'
              value={genre}
              onChange={(evt) => handleChange(evt)}
            />
          </p>
          <p>
            <input
              type='number'
              name='publishedYear'
              placeholder='Year'
              value={publishedYear}
              onChange={(evt) => handleChange(evt)}
            />
          </p>
          <p>
            <input
              type='number'
              name='price'
              placeholder='Price'
              value={price}
              onChange={(evt) => handleChange(evt)}
            />
          </p>

          <button type='submit'>Submit</button>
          <Link to='/books'>Cancel</Link>
          <form onSubmit={(evt) => evt.preventDefault()}></form>
        </form>
      </div>
    );
  }
}
//mapping props and dispatching to thunk creator
const mapDispatchToProps = (dispatch, { history }) => ({
  updateBook: (book) => dispatch(updateBook(book, history)),
});

export default connect(null, mapDispatchToProps)(EditBook);
