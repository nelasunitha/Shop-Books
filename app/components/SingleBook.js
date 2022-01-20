import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSingleBook } from "../redux/singleBook";

class SingleBook extends React.Component {
  componentDidMount() {
    this.props.loadSingleBook(this.props.match.params.id);

  }

  render() {
    const book = this.props.book || {};
    console.log('book', book)

    return (
      <ul>

        <div  key={book.id}>
          <li> Name: {book.name}</li>
          <li>Author {book.author}</li>
          <li>Genre: {book.genre}</li>
          <li>Published Year: {book.publishedYear}</li>
          <li>Price in $: {book.price}</li>

          {/* <img src={robot.imageUrl} style={{ width: "150px" }} /> */}
          <Link to ={`/books/edit/${book.id}`}> Update Book</Link>
        </div>
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    book: state.singleBook,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadSingleBook: (id) => dispatch(fetchSingleBook(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleBook);
