import { createSlice } from "@reduxjs/toolkit";
import { deleteContact, addContact, fetchContacts } from "./operations";

const contactsSlice = createSlice ({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },


    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },


    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(contact => contact.id === action.payload);
      state.items.splice(index, 1);
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

  },
})

export const contactsReducer = contactsSlice.reducer;

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const contactsApi = createApi({
//   reducerPath: 'contacts',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://6335c71b8aa85b7c5d22f8f7.mockapi.io',
//   }),
//   tagTypes: ['Contact'],
//   endpoints: (builder) => ({
//     fetchContacts: builder.query({
//       query: () => `/contacts`,
//       providesTags: ['Contact']
//     }),

//     addContact: builder.mutation({
//       query: values => ({
//         url: '/contacts',
//         method: 'POST',
//         body: values,
//       }),
//       invalidatesTags: ['Contact']
//     }),

//     deleteContact: builder.mutation({
//       query: id => ({
//         url: `/contacts/${id}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['Contact']
//     })
//   }),
// });

// export const { useFetchContactsQuery, useAddContactMutation, useDeleteContactMutation } = contactsApi;

// import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from '@reduxjs/toolkit';

// const contactsInitialState = [
//   { id: 1, name: 'Rosie Simpson', number: '459-12-56', group: true },
//   { id: 2, name: 'Hermione Kline', number: '443-89-12', group: true },
//   { id: 3, name: 'Eden Clements', number: '645-17-79', group: false },
//   { id: 4, name: 'Annie Copeland', number: '227-91-26', group: false },
// ];

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState:
//   { items: [],
//     isLoading: false,
//     error: null}
//   ,
//   reducers: {
//     addContact: {
//       reducer (state, action) {
//         const names = state.map(contact => contact.name);

      //   if (names.find(myContact => myContact === action.payload.name)) {
      //     alert(`${action.payload.name} is already in contacts`);
      //   } else {
      //     state.push(action.payload);
      //   }
      // },
//       prepare (name, number) {
//         return {
//           payload: {
//             id: nanoid(),
//             name,
//             number,
//             // group: false,
//           },
//         };
//       },
//     },

//     deleteContact: (state, action) => {
//       const index = state.findIndex(
//         contact => contact.id === action.payload.id
//       );
//       state.splice(index, 1);

//       // return state.filter(({ id }) => id !== action.payload.id)
//       // return state.filter(contact => contact.id !== action.payload.id);
//     },
//   },
// });

// export const { addContact, deleteContact } = contactsSlice.actions;
// export default contactsSlice.reducer;
