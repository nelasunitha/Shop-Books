import axios from "axios";
const initialState = [];

//actions
const SET_BOOKS = "SET_BOOKS";
const ADD_BOOKS = "ADD_BOOKS";
const DELETE_BOOK = "DELETE_BOOK";
const UPDATE_BOOK = "UPDATE_BOOK";

//action creators
export const setBooks = (books) => {
  return {
    type: SET_BOOKS,
    books,
  };
};

export const addBook= (book) => {
  return {
    type: ADD_BOOKS,
    book,
  };
};
export const removeBook = (book) => {
  return {
    type: DELETE_BOOK,
    book,
  };
};
export const editBook = (book) => {
  return {
    type: UPDATE_BOOK,
    book,
  };
};

//Thunk Creators
export const fetchBooks = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/books");
      //console.log(data)
      dispatch(setBooks(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const createBooks = (book) => {
  return async (dispatch) => {
    try {
      const { data: created } = await axios.post(`/api/books`, book);
      console.log("created", created);

      dispatch(addBook(created));

    } catch (error) {
      console.log(error);
    }
  };
};
export const deleteBook = (id) => {
  return async (dispatch) => {
    const { data: book } = await axios.delete(`/api/books/${id}`);
    dispatch(removeBook(book));
    // history.push("/");
  };
};

export const updateBook = (book, history) => {
  return async (dispatch) => {
    const { data: updated } = await axios.put(`/api/books/${book[0]}`, book);
    dispatch(editBook(updated));
    history.push("/");
  };
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BOOKS:
      return action.books;
    case ADD_BOOKS:
      return [...state, action.book];
    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.book.id);
    case UPDATE_BOOK:
      return state.map((book) =>
      book.id === action.book.id ? action.book : book
      );
    default:
      return state;
  }
}
