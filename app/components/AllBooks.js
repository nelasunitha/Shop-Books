import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AddBook from "./AddBook"

import { fetchBooks, deleteBook } from "../redux/books";

// Notice that we're exporting the AllBooks component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.

let container = {
  'height': '100vh',
  'width': '100vw',
  'display': 'flex',
  'flexFlow': 'rowWrap',
  'backgroundColor':'#ffffb3',

}
export class AllBooks extends React.Component {
  componentDidMount() {
    this.props.fetchBooks();
  }
  render() {
    const books = this.props.books;
    return (
      <div style = {container}>

        <AddBook> </AddBook>
        <h2> Details of Books</h2>
        <div className='search-bar-container'>
            {/* <Searchbar></Searchbar> */}
          </div>
        <ol className = "bg-purple-500-border border-black m-5">
          {books.map((book) => {
            return (
              <li key={book.id}>
                <Link to={`/books/${book.id}`}>
                  <h3>{book.name}</h3>
                </Link>
                <h3>Author: {book.author} </h3>
                <h3>Genre: {book.genre}</h3>
                <h3>Published Year: {book.publishedYear}</h3>
                <h3>Price in $: {book.price}</h3>
                <div>
                  Remove
                  <button type = 'button'
                    className="remove"
                    onClick={() => this.props.deleteBook(`${book.id}`)}>
                    {" "}
                    &#10060;
                  </button>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("Book state", state);
  return {
    books: state.books,
  };
};
//mapping state to props
const mapDispatchToProps = (dispatch) => {``
  return {
    fetchBooks: () => dispatch(fetchBooks()),
    deleteBook:(id) => dispatch(deleteBook(id,history)),
  };
};
//mapping props and dispatching to thunk creator
export default connect(mapStateToProps, mapDispatchToProps)(AllBooks);
