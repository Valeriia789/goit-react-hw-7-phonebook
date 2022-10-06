import { useDispatch } from "react-redux";
import { deleteContact} from "../../redux/operations";
import { ListItem, DeleteButton } from './ContactListItem.styled';

export const ContactListItem = ({contact}) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  console.log(contact);

  return (
    <ListItem>
      <p>
        {contact.name} : {contact.phone}
      </p>
      <DeleteButton
        type='button'
        onClick={handleDelete}
      >
        Delete
      </DeleteButton>
    </ListItem>
  );
}






// import { useDeleteContactMutation } from '../../redux/contactsSlice';
// import { ListItem, DeleteButton } from './ContactListItem.styled';

// export const ContactListItem = ({ contact }) => {
//   const [deleteContact, { isLoading }] = useDeleteContactMutation();

//   console.log(contact);
//   return (
//     <ListItem>
//       <p>
//         {contact.name} : {contact.phone}
//       </p>
//       <DeleteButton
//         type='button'
//         onClick={() => deleteContact(contact.id)}
//         disabled={isLoading}
//       >
//         Delete
//       </DeleteButton>
//     </ListItem>
//   );
// };
