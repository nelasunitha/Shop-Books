import { combineReducers } from 'redux';
import booksReducer from './books';
import singleBookReducer from './singleBook';

const appReducer = combineReducers({
  books: booksReducer,
  singleBook: singleBookReducer,
})


export default appReducer;
