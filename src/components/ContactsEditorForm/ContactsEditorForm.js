import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';
import { Form, Label, SubmitButton } from './ContactsEditorForm.styled';
import { Input } from '../commonStyles/Input.styled';

export const ContactsEditorForm = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(selectContacts);
  const namesArray = items.map(contact => contact.name);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;

    if (namesArray.find(myContact => myContact === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, phone }));
    form.reset();
  };

  return (
    <section>
      <h2>Phonebook</h2>

      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type='text'
            id='name'
            name='name'
            placeholder='Name Surname'
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>

        <Label>
          Phone number
          <Input
            type='tel'
            id='phone'
            name='phone'
            placeholder='+38 000 00 00'
            pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
            title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
            required
          />
        </Label>

        <SubmitButton type='submit'>Save contact</SubmitButton>
      </Form>
    </section>
  );
};
