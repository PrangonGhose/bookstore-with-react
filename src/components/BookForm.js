import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { postBooks } from '../redux/books/books';

const BookForm = () => {
  const [bookName, setBookName] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookGenre, setBookGenre] = useState('Action');

  const newId = v4();
  const dispatch = useDispatch();

  const addBook = (e) => {
    e.preventDefault();
    const data = {
      bookId: newId,
      bookGenre,
      bookName,
      bookAuthor,
    };
    setBookName('');
    setBookAuthor('');
    setBookGenre('Action');
    dispatch(postBooks(data));
  };

  return (
    <section className="form-section">
      <h1 className="newBook">ADD NEW BOOK</h1>
      <form className="form">
        <input type="text" className="bookTitle" value={bookName} onChange={(e) => setBookName(e.target.value)} placeholder="Book Title" />
        <input type="text" className="bookAuthor" value={bookAuthor} onChange={(e) => setBookAuthor(e.target.value)} required placeholder="Name of the Author" />
        <select name="bookGenre" className="bookGenreList" value={bookGenre} onChange={(e) => setBookGenre(e.target.value)}>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
          <option value="Others">Others</option>
        </select>
        <button type="submit" className="bookAddButton" onClick={addBook}>Add Book</button>
      </form>
    </section>
  );
};

export default BookForm;
