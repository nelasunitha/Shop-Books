import axios from "axios";

const SET_SINGLE_BOOK = 'SET_SINGLE_BOOK'
const initialState = {};

 export const setSingleBook = (book) => {
  return {
    type: SET_SINGLE_BOOK,
    book,
  };
};

export const fetchSingleBook = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/books/${id}`);
      console.log('Data', data)
      dispatch(setSingleBook(data));
    } catch (error) {
      console.log(error);
    }
  };
};


export default function singleBookReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_BOOK:
      return action.book;
    default:
      return state;
  }
}
