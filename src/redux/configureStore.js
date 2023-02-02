import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import bookCategoryReducer from './categories/categories';

const rootReducer = {
  book: bookReducer,
  categories: bookCategoryReducer,
};

const store = configureStore({ reducer: rootReducer });

export default store;
