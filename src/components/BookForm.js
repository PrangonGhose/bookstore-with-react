/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const BookForm = () => {
  const [inputText, setInputText] = useState({
    title: '',
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="form">
      <h1 className="newBook">ADD NEW BOOK</h1>
      <input type="text" name="bookTitle" onChange={onChange} required placeholder="Book Title" />
      <input type="text" name="bookAuthor" onChange={onChange} required placeholder="Name of the Author" />
      <select name="bookGenre" className="bookGenreList">
        <option value="Action">Action</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Economy">Economy</option>
        <option value="Others">Others</option>
      </select>
      <button type="submit" className="bookAddButton">Add Book</button>
    </form>
  );
};

export default BookForm;
