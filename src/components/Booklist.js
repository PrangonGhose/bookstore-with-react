import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';
import { getBooks } from '../redux/books/books';

const Booklist = () => {
  const bookList = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

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
