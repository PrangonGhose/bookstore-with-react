import { CHECK_BOOK_CATEGORY } from '../constants';

export const checkBookCategory = () => ({
  type: CHECK_BOOK_CATEGORY,
  data: 'Under Construction',
});

const bookCategoryReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_BOOK_CATEGORY:
      return [
        ...state,
        action.data,
      ];
    default:
      return state;
  }
};

export default bookCategoryReducer;
