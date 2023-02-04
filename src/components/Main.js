import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Booklist from './Booklist';
import Categories from './Categories';

const Main = () => (
  <div className="main-container">
    <header>
      <h1>
        <Link to="/" className="logo">Bookstore CMS</Link>
      </h1>
      <ul className="header-list">
        <li><Link to="/" className="link">Books</Link></li>
        <li><Link to="/categories" className="link">Categories</Link></li>
      </ul>
      <button type="button" className="button-icon">
        <span className="material-icons">person</span>
      </button>
    </header>
    <Routes>
      <Route path="/" exact element={<Booklist />} />
      <Route path="/categories" exact element={<Categories />} />
    </Routes>
  </div>
);

export default Main;
