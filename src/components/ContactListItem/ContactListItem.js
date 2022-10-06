import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { ListItem, DeleteButton } from './ContactListItem.styled';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <ListItem>
      <p>
        {contact.name} : {contact.phone}
      </p>
      <DeleteButton type='button' onClick={handleDelete}>
        Delete
      </DeleteButton>
    </ListItem>
  );
};
