import React from 'react';
import { useSelector } from 'react-redux';
import { ContactListItem } from '../ContactListItem/ContactListItem';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const totalContacts = contacts.length;

  const getFilteredContacts = () => {
    if (filter) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return contacts;
  };

  const filteredContacts = getFilteredContacts();

  return (
    <section>
      <h2>Contacts</h2>

      <ul>
        {Array.isArray(filteredContacts)
          ? filteredContacts.map(contact => {
              return (
                <ContactListItem
                  key={contact.id}
                  id={contact.id}
                  name={contact.name}
                  number={contact.number}
                  // group={contact.group}
                ></ContactListItem>
              );
            })
          : null}
      </ul>

      <div>
        <p>
          Total contacts:
          {totalContacts}
        </p>
        {/* <p>
          Close friends:
          {closeFriendsGroup}
        </p> */}
      </div>
    </section>
  );
};
