import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { ListItem, DeleteButton } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDeleteContactClicked = () => {
    dispatch(deleteContact({ id }));
  };

  return (
    <ListItem>
      <p>
        {name} : {number}
      </p>

      {/* <label>
      <input type='checkbox' checked={group} />
      Best friend
    </label> */}

      <DeleteButton type='button' onClick={onDeleteContactClicked}>
        Delete
      </DeleteButton>
    </ListItem>
  );
};
