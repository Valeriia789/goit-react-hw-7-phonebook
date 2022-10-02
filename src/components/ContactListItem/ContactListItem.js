import { useDeleteContactMutation } from '../../redux/contactsSlice';
import { ListItem, DeleteButton } from './ContactListItem.styled';

export const ContactListItem = ({ contact }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  console.log(contact);
  return (
    <ListItem>
      <p>
        {contact.name} : {contact.phone}
      </p>
      <DeleteButton
        type='button'
        onClick={() => deleteContact(contact.id)}
        disabled={isLoading}
      >
        Delete
      </DeleteButton>
    </ListItem>
  );
};
