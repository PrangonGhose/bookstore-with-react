/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { RemoveBook } from '../redux/books/books';

const Book = (props) => {
  const { book } = props;
  const {
    bookId, bookGenre, bookName, bookAuthor,
  } = book;
  const dispatch = useDispatch();

  const removeBook = (bookId) => {
    dispatch(RemoveBook(bookId));
  };

  return (
    <div className="bookCard" id={bookId}>
      <div className="column-1">
        <div className="bookDetail">
          <h3 className="genre">{bookGenre}</h3>
          <h1 className="title">{bookName}</h1>
          <h3 className="author">{bookAuthor}</h3>
        </div>
        <div className="button-section">
          <button type="submit" className="button">Comments</button>
          <button type="submit" className="button line" onClick={() => removeBook(bookId)}>Remove</button>
          <button type="submit" className="button line">Edit</button>
        </div>
      </div>
      <div className="column-2">
        <h1 className="completed">64% Completed</h1>
      </div>
      <div className="column-3">
        <div className="progress">
          <h3 className="current-chapter">Current Chapter</h3>
          <h2 className="chapter-no">Chapter 17</h2>
          <button type="submit" className="progress-button">Update Progress</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
