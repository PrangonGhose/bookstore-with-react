import { createAsyncThunk } from '@reduxjs/toolkit';
import { ADD_BOOK, ALL_BOOKS, REMOVE_BOOK } from '../constants';

export const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Ze0tRMOWnvW25f5ddSv1/books/';

export const getBooks = createAsyncThunk(ALL_BOOKS, async () => {
  const response = await fetch(url);
  let data = await response.json();
  data = Object.entries(data);
  const allBooks = [];
  for (let i = 0; i < data.length; i += 1) {
    const bookId = data[i][0];
    const newBook = {
      bookId,
      bookName: data[i][1][0].title,
      bookAuthor: data[i][1][0].author,
      bookGenre: data[i][1][0].category,
    };
    allBooks.push(newBook);
  }
  return allBooks;
});

export const postBooks = createAsyncThunk(ADD_BOOK, async (book) => {
  const bookData = {
    item_id: book.bookId,
    title: book.bookName,
    author: book.bookAuthor,
    category: book.bookGenre,
  };

  const params = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bookData),
  };
  await fetch(url, params);
  return book;
});

export const deleteBook = createAsyncThunk(REMOVE_BOOK, async (bookId) => {
  const urlToDelete = `${url}${bookId}`;
  const params = {
    method: 'DELETE',
    header: {
      'Content-Type': 'application/json',
    },
  };
  await fetch(urlToDelete, params);
  return bookId;
});

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case `${ADD_BOOK}/fulfilled`:
      return [
        ...state,
        action.payload,
      ];
    case `${REMOVE_BOOK}/fulfilled`:
      return state.filter((book) => book.bookId !== action.payload);
    case `${ALL_BOOKS}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export default bookReducer;
