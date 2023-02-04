import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetBooks } from '../redux/books/books';
import Book from './Book';
import BookForm from './BookForm';

const Booklist = () => {
  const bookList = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetBooks());
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
