
import toast from 'react-hot-toast';
import { ContactsEditorForm } from '../ContactsEditorForm/ContactsEditorForm';
// import { MaterialEditorForm } from 'components/MaterialEditorForm/MaterialEditorForm';
// import { BackLink } from 'components/BackLink/BackLink';
import { useFetchContactsQuery, useAddContactMutation } from 'redux/contactsSlice';

export const AddContactPage = () => {
  const [addContact] = useAddContactMutation();

  const handleAddContact = async values => {
    try {
      await addContact(values);
      toast.success('Контакт додано');
    } catch (error) {
      toast.error('Помилка при додаванні матеріалу');
      console.log(error);
    }
  };

  return (
    <>
      {/* <BackLink href="/list" label="К списку материалов" />
      <MaterialEditorForm
        btnText="Добавить материал"
        onSubmit={handleAddMaterial}
      /> */}
    </>
  );
};