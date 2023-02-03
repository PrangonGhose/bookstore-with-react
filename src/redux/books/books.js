import { ADD_BOOK, ALL_BOOKS, REMOVE_BOOK } from '../constants';
import { postBooks, deleteBook, getBooks } from '../../components/connectAPI';

export const AddBook = (data) => async (dispatch) => {
  postBooks(data);
  dispatch({
    type: ADD_BOOK,
    data,
  });
};

export const RemoveBook = (bookId) => (dispatch) => {
  deleteBook(bookId);
  dispatch({
    type: REMOVE_BOOK,
    data: bookId,
  });
};

export const GetBooks = () => async (dispatch) => {
  const allBooks = await getBooks();
  dispatch({
    type: ALL_BOOKS,
    data: allBooks,
  });
};

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.data,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.bookId !== action.data);
    case ALL_BOOKS:
      return action.data;
    default:
      return state;
  }
};

export default bookReducer;
