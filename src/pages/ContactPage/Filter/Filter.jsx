// Filter.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../../redux/contact/contactsSlice';
import { selectFilter } from '../../../redux/contact/contactsSelectors';
import s from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <form>
      Find contacts by name
      <input type="text" name="filter" value={filter} onChange={e => dispatch(changeFilter(e.target.value))} className={s.input} />
    </form>
  );
};

