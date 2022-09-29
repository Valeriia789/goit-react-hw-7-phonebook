import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { fetchAll } from 'components/ContactList/contactsAPI';

const items = createReducer([], {
  [fetchAll.fulfilled]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [fetchAll.pending]: () => true,
  [fetchAll.fulfilled]: () => false,
  [fetchAll.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchAll.rejected]: (_, action) => action.payload,
  [fetchAll.pending]: () => null,
});

export default combineReducers({
  items,
  isLoading,
  error,
});
