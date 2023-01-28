/* eslint-disable react/prop-types */
import React from 'react';
import Book from './Book';
import BookForm from './BookForm';

const Booklist = (props) => {
  const { bookList } = props;

  return (
    <div className="bookList">
      <ul>
        {bookList.bookList.map((book) => (
          <Book
            key={book.bookId}
            book={book}
          />
        ))}
      </ul>
      <BookForm />
    </div>
  );
};

export default Booklist;
