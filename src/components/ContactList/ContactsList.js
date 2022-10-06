import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/operations';
import { selectContacts, selectFilter } from '../../redux/selectors';
import { ContactListItem } from '../ContactListItem/ContactListItem';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilteredContacts = () => {
    if (filter) {
      return items.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return items;
  };

  const filteredContacts = getFilteredContacts();
  const totalContacts = items.length;
  const shownContacts = filteredContacts.length;

  return (
    <div>
      {isLoading && <b>Loading contacts...</b>}
      {error && <b>{error.message}</b>}
      
      <section>
        <h2>Contacts</h2>

        <ul>
          {Array.isArray(filteredContacts)
            ? filteredContacts.map(contact => {
                return (
                  <ContactListItem
                    key={contact.id}
                    contact={contact}
                    id={contact.id}
                  />
                );
              })
            : null}
        </ul>

        <div>
          <p>
            Total contacts:
            {totalContacts}
          </p>
          <p>
            Contacts shown:
            {shownContacts}
          </p>
        </div>
      </section>
    </div>
  );
};
