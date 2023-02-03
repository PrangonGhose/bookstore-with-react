import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { AddBook } from '../redux/books/books';

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
    dispatch(AddBook(data));
  };

  return (
    <form className="form">
      <h1 className="newBook">ADD NEW BOOK</h1>
      <input type="text" name="bookTitle" value={bookName} onChange={(e) => setBookName(e.target.value)} required placeholder="Book Title" />
      <input type="text" name="bookAuthor" value={bookAuthor} onChange={(e) => setBookAuthor(e.target.value)} required placeholder="Name of the Author" />
      <select name="bookGenre" className="bookGenreList" value={bookGenre} onChange={(e) => setBookGenre(e.target.value)} required>
        <option value="Action">Action</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Economy">Economy</option>
        <option value="Others">Others</option>
      </select>
      <button type="submit" className="bookAddButton" onClick={addBook}>Add Book</button>
    </form>
  );
};

export default BookForm;
