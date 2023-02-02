import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';

const Booklist = () => {
  const bookList = useSelector((state) => state.book);

  return (
    <div className="bookList">
      <ul>
        {bookList.map((book) => (
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
