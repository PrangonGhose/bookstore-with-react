import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkBookCategory } from '../redux/categories/categories';

const Categories = () => {
  const category = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const checkCategory = () => dispatch(checkBookCategory());

  return (
    <div>
      <h1>{category}</h1>
      <button type="button" onClick={checkCategory}>Check Status</button>
    </div>
  );
};

export default Categories;
