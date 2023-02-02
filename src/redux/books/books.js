import { ADD_BOOK, REMOVE_BOOK } from '../constants';

export const AddBook = (data) => ({
  type: ADD_BOOK,
  data,
});

export const RemoveBook = (bookId) => ({
  type: REMOVE_BOOK,
  data: bookId,
});

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.data,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.bookId !== action.data);
    default:
      return state;
  }
};

export default bookReducer;
