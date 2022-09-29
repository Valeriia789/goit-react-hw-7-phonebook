import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

// const contactsInitialState = [
//   { id: 1, name: 'Rosie Simpson', number: '459-12-56', group: true },
//   { id: 2, name: 'Hermione Kline', number: '443-89-12', group: true },
//   { id: 3, name: 'Eden Clements', number: '645-17-79', group: false },
//   { id: 4, name: 'Annie Copeland', number: '227-91-26', group: false },
// ];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: 
  { items: [],
    isLoading: false,
    error: null}
  ,
  reducers: {
    addContact: {
      reducer (state, action) {
        const names = state.map(contact => contact.name);

        if (names.find(myContact => myContact === action.payload.name)) {
          alert(`${action.payload.name} is already in contacts`);
        } else {
          state.push(action.payload);
        }
      },
      prepare (name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
            // group: false,
          },
        };
      },
    },

    deleteContact: (state, action) => {
      const index = state.findIndex(
        contact => contact.id === action.payload.id
      );
      state.splice(index, 1);

      // return state.filter(({ id }) => id !== action.payload.id)
      // return state.filter(contact => contact.id !== action.payload.id);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;