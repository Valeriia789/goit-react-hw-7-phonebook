import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  useFetchContactsQuery,
  useAddContactMutation,
} from '../../redux/contactsSlice';

import { Form, Label, SubmitButton } from './ContactsEditorForm.styled';
import { Input } from '../commonStyles/Input.styled';

export const ContactsEditorForm = () => {
  const { data: contacts } = useFetchContactsQuery();
  const [addNewContact] = useAddContactMutation();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const namesArray = contacts.map(contact => contact.name);

    if (namesArray.find(myContact => myContact === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    addNewContact({ name, phone: number });
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
            id='contactName'
            name='contactName'
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
            id='contactNumber'
            name='contactNumber'
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

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addContact } from '../../redux/contactsSlice';

// import { Form, Label, SubmitButton } from './ContactsEditor.styled';
// import { Input } from '../commonStyles/Input.styled';

// const ContactsEditor = () => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const dispatch = useDispatch();

//   const onNameChanged = e => setName(e.target.value);
//   const onNumberChanged = e => setNumber(e.target.value);

//   const onSaveContactClicked = () => {
//     if (name && number) {
//       dispatch(addContact(name, number));

//       setName('');
//       setNumber('');
//     }
//   };

//   return (
//     <section>
//       <h2>Phonebook</h2>

//       <Form>
//         <Label>
//           Name
//           <Input
//             type='text'
//             id='contactName'
//             name='contactName'
//             value={name}
//             onChange={onNameChanged}
//             placeholder='Name Surname'
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </Label>

//         <Label>
//           Phone number
//           <Input
//             type='tel'
//             id='contactNumber'
//             name='contactNumber'
//             value={number}
//             onChange={onNumberChanged}
//             placeholder='+38 000 00 00'
//             pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
//             title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
//             required
//           />
//         </Label>

//         <SubmitButton type='button' onClick={onSaveContactClicked}>
//           Save contact
//         </SubmitButton>
//       </Form>
//     </section>
//   );
// };

// export default ContactsEditor;
