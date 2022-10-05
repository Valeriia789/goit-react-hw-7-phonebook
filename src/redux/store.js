import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});


// import { configureStore } from '@reduxjs/toolkit';
// // import { setupListeners } from '@reduxjs/toolkit/dist/query';
// import { contactsApi } from './contactsSlice';

// export const store = configureStore({
//   reducer: {
//     [contactsApi.reducerPath]: contactsApi.reducer,
//   },

//   middleware: getDefaultMiddleware =>
//     // getDefaultMiddleware().concat(contactsApi.middleware)
//     [...getDefaultMiddleware(), contactsApi.middleware],
// });

// setupListeners(store.dispatch);