import { Routes, Route, Navigate } from 'react-router-dom';
import { AddContactPage } from './pages/AddContactPage';
import { ListPage } from './pages/ListPage';
import { Layout } from './Layout';
import { NotFoundPage } from './pages/NotFoundPage'; 
// import { EditMaterialModal } from 'components/EditMaterialModal/EditMaterialModal';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/list" />} />
          <Route path="create" element={<AddContactPage />} />
          <Route path="list/*" element={<ListPage />}>
            {/* <Route path="edit/:materialId" element={<EditMaterialModal />} /> */}
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};


// import { ContactsList } from './ContactList/ContactsList';
// import ContactsEditor from './ContactsEditor/ContactsEditor';
// import { Filter } from './Filter/Filter';

// const App = () => {
//   return (
//     <>
//       <ContactsEditor />
//       <Filter />
//       <ContactsList />
//     </>
//   );
// };

// export default App;
