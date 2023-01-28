/* eslint-disable react/prop-types */
import React from 'react';

const Book = (props) => {
  const { book } = props;
  const {
    bookId, bookGenre, bookName, bookAuthor,
  } = book;

  return (
    <div className="bookCard" id={bookId}>
      <div className="column-1">
        <div className="bookDetail">
          <h3 className="genre">{bookGenre}</h3>
          <h1 className="title">{bookName}</h1>
          <h3 className="author">{bookAuthor}</h3>
        </div>
        <div className="button-section">
          <button type="submit">Comments</button>
          <button type="submit">Remove</button>
          <button type="submit">Edit</button>
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
