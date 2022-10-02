import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { ContactsEditorForm } from '../ContactsEditorForm/ContactsEditorForm';
// import { BackLink } from 'components/BackLink/BackLink';
import { useAddContactMutation } from '../../redux/contactsSlice';

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
      <Link href="/list">Назад до списку контактів</Link>
      <ContactsEditorForm onSubmit={handleAddContact} />
      {/* <BackLink href="/list" label="К списку материалов" />
      <MaterialEditorForm
        btnText="Добавить материал"
        onSubmit={handleAddMaterial}
      /> */}
    </>
  );
};
