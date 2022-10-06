import { ContactsEditorForm } from './ContactsEditorForm/ContactsEditorForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactList/ContactsList';

export const App = () => {
  return (
    <>
      <ContactsEditorForm />
      <Filter />
      <ContactsList />
    </>
  );
};
