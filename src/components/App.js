import { ContactList } from './ContactList/ContactList';
import ContactsEditor from './ContactsEditor/ContactsEditor';
import { Filter } from './Filter/Filter';

const App = () => {
  return (
    <>
      <ContactsEditor />
      <Filter />
      <ContactList />
    </>
  );
};

export default App;
