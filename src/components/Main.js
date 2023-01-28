/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Booklist from './Booklist';
import Categories from './Categories';

const Main = () => {
  const [bookList, setBookList] = useState({ // eslint-disable-line
    bookList: [
      {
        bookId: 1,
        bookGenre: 'Action',
        bookName: 'The Hunger Games',
        bookAuthor: 'Suzanne Collins',
      },
      {
        bookId: 2,
        bookGenre: 'Science Fiction',
        bookName: 'Dune',
        bookAuthor: 'Frank Herbert',
      },
      {
        bookId: 3,
        bookGenre: 'Economy',
        bookName: 'Capital in the Twenty-First Century',
        bookAuthor: 'Suzanne Collins',
      },
    ],
  });

  return (
    <div className="main-container">
      <header>
        <h1>
          <Link to="/" className="logo">Bookstore CMS</Link>
        </h1>
        <nav>
          <ul>
            <li><Link to="/" className="link">Books</Link></li>
            <li><Link to="/categories" className="link">Categories</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" exact element={<Booklist bookList={bookList} />} />
        <Route path="/categories" exact element={<Categories />} />
      </Routes>
    </div>
  );
};

export default Main;
