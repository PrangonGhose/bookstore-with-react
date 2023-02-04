import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkBookCategory } from '../redux/categories/categories';

const Categories = () => {
  const category = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const checkCategory = () => dispatch(checkBookCategory());

  return (
    <div className="bookList">
      <h1 className="title">{category}</h1>
      <button className="progress-button" type="button" onClick={checkCategory}>Check Status</button>
    </div>
  );
};

export default Categories;
