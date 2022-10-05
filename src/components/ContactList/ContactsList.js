import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from '../../redux/operations'
import { getContacts } from '../../redux/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}
      <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
    </div>
  );

}
// import React from 'react';
// import { useSelector } from 'react-redux';
// import { ContactListItem } from '../ContactListItem/ContactListItem';

// export const ContactsList = ({contacts, ...otherProps}) => {
//   // const contacts = useSelector(state => state.contacts);
//   const filter = useSelector(state => state.filter);
//   const totalContacts = contacts.length;

//   const getFilteredContacts = () => {
//     if (filter) {
//       return contacts.filter(contact =>
//         contact.name.toLowerCase().includes(filter.toLowerCase())
//       );
//     }
//     return contacts;
//   };

//   const filteredContacts = getFilteredContacts();

//   return (
//     <section>
//       <h2>Contacts</h2>

//       <ul>
//         {Array.isArray(filteredContacts)
//           ? filteredContacts.map(contact => {
//               return (
//                 <ContactListItem key={contact.id} contact={contact} {...otherProps}/>
//               );
//             })
//           : null}
//       </ul>

//       <div>
//         <p>
//           Total contacts:
//           {totalContacts}
//         </p>
//         {/* <p>
//           Close friends:
//           {closeFriendsGroup}
//         </p> */}
//       </div>
//     </section>
//   );
// };
