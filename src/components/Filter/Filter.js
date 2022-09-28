import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { findContact } from '../../redux/filterSlice';

import { Input } from '../commonStyles/Input.styled';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onUpdateFilter = e => dispatch(findContact(e.currentTarget.value));

  return (
    <Input
      value={filter}
      name='filter'
      type='text'
      placeholder='Find contact'
      onChange={onUpdateFilter}
    />
  );
};
