import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../Slice/todo/todoSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(setFilter('all'))}>Все</button>
      <button onClick={() => dispatch(setFilter('completed'))}>Выполненные</button>
      <button onClick={() => dispatch(setFilter('incomplete'))}>Невыполненные</button>
    </div>
  );
};

export default Filter;